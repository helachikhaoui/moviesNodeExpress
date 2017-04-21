var app = require('./src/lib/app')
app.listen(process.env.PORT||3000)
// app.set('port', (process.env.PORT || 5000));
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
MongoClient.connect(process.env.PROD_MONGODB+'?authMode=scram-sha1', function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
    db.close();
});
