var app = require('./src/lib/app')
app.listen(process.env.PORT||3000)
// app.set('port', (process.env.PORT || 5000));
 app.use(express.static(__dirname + '/public'));
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
