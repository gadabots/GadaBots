const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


// User Model
const User = require('../../models/Users');

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post('/', (req, res) => {
  const { name, email, password, stanley } = req.body;

  // Simple validation
  if(!name || !email || !password || !stanley) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if(user) return res.status(400).json({ msg: 'User already exists' });

      const newUser = new User({
        name,
        email,
        password,
        stanley
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
                (err, token) => {
                  if(err) throw err;
                  res.json({
                    token,
                    user: {
                      id: user.id,
                      name: user.name,
                      email: user.email,
                      stanley: user.stanley
                    }
                  });
                }
              )
            });
        })
      })
    })
});

module.exports = router;




// const User = require("../../models/Users");

// router.get("/", (req, res) => {
//     User.find()
//         .sort({
//             date: -1
//         })
//         .then(users => (res.json(users)))
// })

// router.post("/", (req, res) => {
//     const newUser = new User ({
//         username: req.body.username,
//         password: req.body.password,
//         stanley: req.body.stanley
//     });
//     newUser.save()
//         .then(user => res.json(user));
// });

// module.exports = router;

