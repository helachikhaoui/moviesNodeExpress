var mongoose = require('mongoose');
var mongoUrl = 'mongodb://hela:hela@ds1791.mlab.com:11791/movies' || 'mongodb://localhost/movies';

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
