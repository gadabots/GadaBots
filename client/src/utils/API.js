import axios from "axios";

export default {
 
  // Gets the bot with the given id
  getBot: function(id) {
    return axios.get("/api/bot/" + id);
  },
  getBotsByUser:function(userid) {
    return axios.get("api/bots/" + userid);
  },
  updateUsername: function(userid, changeToMake) {
    console.log("Updating user. Id: " + userid + ", name: " + changeToMake)
    axios.put("/api/users/" + userid, {
      name: changeToMake
    }).then(
        // Reload the whole page to show the new name
        res => window.location.reload()
      );
  }, 
  updatePassword: function(userid, changeToMake) {
    console.log("Updating user. Id: " + userid + ", password: " + changeToMake)
    axios.put("/api/users/" + userid, {
      password: changeToMake
    }).then(
        // Reload the whole page to show the new name
        res => window.location.reload()
      );
  },
   addNewLocation: function(id, changeToMake) {
    
    console.log(changeToMake)
    return axios.put("/api/bot/" + id, {
      checkIns: changeToMake
    }).then(
        // Reload the whole page to show the new name
        res => window.location.reload()
      );;
  }

};
