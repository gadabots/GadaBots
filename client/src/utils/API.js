import axios from "axios";

export default {
 
  // Gets all saved bots
  getSavedBot: function() {
    return axios.get("/api/bots");
  },
  // Gets all saved Users
  getSavedUser: function() {
    return axios.get("/api/users");
  },
  // Gets the bot with the given id
  getBot: function(id) {
    return axios.get("/api/bot/" + id);
  },
  getBotsByUser:function(userid) {
    return axios.get("api/bots/" + userid);
  },
  // Saves an bot to the database
  saveBot: function(BotData) {
    return axios.post("/api/bots", BotData);
  },
  updateName: function(userid, name) {
    console.log("Updating user. Id: " + userid + ", Name: " + name)
    axios.put("/api/users/" + userid, {
      name: name
    }).then(
        // Reload the whole page to show the new name
        res => window.location.reload()
      );
  }

};
