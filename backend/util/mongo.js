const mongoose = require('mongoose');
const constants = require('./constants');

module.exports = () => {
  const connect = () => {
    mongoose.Promise = global.Promise
    
    mongoose.connect(constants.URL_MONGO, constants.MONGO_OPTIONS);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);
  }

  connect();

  mongoose.connection.on('disconnected', connect)
}
