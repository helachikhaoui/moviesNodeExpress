var app = require('./src/lib/app')
var port = process.env.PORT || 8000
app.listen(port||3000)
// app.set('port', (process.env.PORT || 5000));
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
MongoClient.connect(process.env.PROD_MONGODB, function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
    db.close();
});
