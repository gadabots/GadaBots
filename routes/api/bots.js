const router = require("express").Router();
const botsController = require("../../controllers/botsController");

// Matches with "/api/bots/:username"
router.route("api/bots/:username")
  .get(botsController.findBotsByUser);

module.exports = router;
