const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const botSchema = new Schema({
      _id: Schema.ObjectId,
      name: { type: String, 
            required: true },
      checkIns: [{
            pic: String,
            location: String,
            journalEntry: String,
            date: { type: Date, default: Date.now }
      }],
      userid: [{ type: Schema.Types.ObjectId, ref: 'user' }]


});

const Bot = mongoose.model("Bot", botSchema);

module.exports = Bot;
