const db = require("../models");

// Defining methods for the botsController
module.exports = {
  findBotsByUser: function (req, res) {
    db.Bot.
      findOne({ userid: req.params.userid }).
      populate('user').
      exec(function (err, bot) {
        if (err) return handleError(err);
        console.log('The bot is %s', bot);
      });
  }
};
