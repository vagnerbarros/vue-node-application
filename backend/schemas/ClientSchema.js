var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var clientSchema = new Schema({
  firstName: String,
  lastName: String,
  adress: String,
  city: String,
  state: String
});

var Client = mongoose.model("client", clientSchema);

module.exports = Client;
