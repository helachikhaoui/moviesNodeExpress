var mongoose = require('mongoose');
var mongoUrl = process.env.PROD_MONGODB||process.env.MONGOLAB_URI ||process.env.MONGO_URL || 'mongodb://localhost/movies';

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
