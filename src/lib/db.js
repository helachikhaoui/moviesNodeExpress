var mongoose = require('mongoose');
var mongoUrl = process.env.PROD_MONGODB||'mongodb://127.0.0.1:27017/movies'||process.env.PROD_MONGODB;

module.exports = function(app) {
  mongoose.connect(mongoUrl, {
    mongoose: {
      safe: true
    }
  }, function(err) {
    if (err) {
      return console.log('Mongoose - connection error:', err);
    }
  });

  // mongoose.set('debug', true);

  return mongoose;
};
