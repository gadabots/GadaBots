const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const path = require('path');


const checkIn = new Schema({
       pic: String,
       location: { type: String, required: true },
       journalEntry: String,
       date: { type: Date, default: Date.now }
      
});


const botSchema = new Schema({
      name: { type: String, required: true },
<<<<<<< HEAD
      checkIns: [checkIn],
=======
      checkIns:[
            {
            pic: { type: String, required: true },
            location: { type: String, required: true },
            journalEntry: { type: String, required: true },
            date: { type: Date, default: Date.now }
            }
      ],
>>>>>>> 09f7b059269d6cd5b03aedd169212380d7ab7d81
      userid: [{ type: Schema.Types.ObjectId, ref: 'user' }]
});

module.exports = Bot = mongoose.model("bot", botSchema);

