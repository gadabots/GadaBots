const router = require("express").Router();
const botsController = require("../../controllers/botsController");


// Matches with "/api/bots/:userid"
router.route("api/bots/:userid")
  .get(botsController.findBotsByUser);




// Export API routes
module.exports = router;
