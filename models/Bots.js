const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const checkIn = new Schema({
       pic: String,
       location: { type: String, required: true },
       journalEntry: String,
       date: { type: Date, default: Date.now }
      
});


const botSchema = new Schema({
      name: { type: String, required: true },
      checkIns: [checkIn],
      userid: [{ type: Schema.Types.ObjectId, ref: 'user' }]
});

const Bot = mongoose.model("Bot", botSchema);

module.exports = Bot;
