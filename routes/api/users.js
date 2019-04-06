const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
// const auth = require('../../middleware/auth');

// User Model
const User = require('../../models/Users');

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post('/', (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation
  if(!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }
  //get all user
  router.get("/", (req, res) => {
    User.find()
        .then(users => (res.json(users)))
})

  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if(user) return res.status(400).json({ msg: 'User already exists' });

      const newUser = new User({
        name,
        email,
        password
      });

      // Create salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              jwt.sign(
                { id: user.id },
                require("../../config/Keys").jwtSecret,
                { expiresIn: 3600 },
                // Callback
                (err, token) => {
                  if(err) throw err;
                  res.json({
                    token,
                    user: {
                      id: user.id,
                      name: user.name,
                      email: user.email
                    }
                  });
                }
              )
            });
        })
      })
    })
});

// @route   GET api/users/:id
// @desc    Retrieve existing user
// @access  Private
router.get("/:id", (req, /*auth, */ res) => {
  User
    .findById(req.params.id)
    .then(user => res.json(user));
})

// @route   PUT api/users/:id
// @desc    Update existing user
// @access  Private
router.put("/:id", (req, /*auth, */ res) => {
  User
    .findByIdAndUpdate( req.params.id, req.body)
    .then(user => res.json(user))
    .catch(err => {
      res.status(500).json(err);
      console.log("Error updating user: " + err);
    });
})

module.exports = router;
