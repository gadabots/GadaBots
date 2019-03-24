import axios from "axios";

export default {
 
  // Gets the bot with the given id
  getBot: function(id) {
    return axios.get("/api/bot/" + id);
  },
  getBotsByUser:function(username){
    return axios.get("api/bots/"+username);
  }
 
};
