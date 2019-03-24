const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findBotsByUser: function (req, res) {
    db.Bot.
      findOne({ username: req.params.username }).
      populate('user').
      exec(function (err, bot) {
        if (err) return handleError(err);
        console.log('The bot is %s', bot);
      });
  }
};
