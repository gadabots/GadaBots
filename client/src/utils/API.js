import axios from "axios";

export default {
 
  // Gets the bot with the given id
  getBot: function(id) {
    return axios.get("/api/bot/" + id);
  },
  getBotsByUser:function(userid) {
    return axios.get("api/bots/" + userid);
  },
  updateUser: function(userid, fieldToChange, changeToMake) {
    console.log("Updating user. Id: " + userid + ", fieldToChange: " + changeToMake)
    axios.put("/api/users/" + userid, {
      fieldToChange: changeToMake
    }).then(
        // Reload the whole page to show the new name
        res => window.location.reload()
      );
  }

};
