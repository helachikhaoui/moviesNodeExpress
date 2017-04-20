var app = require('./src/lib/app')
 app.set('port', (process.env.PORT || 3000));
 app.get('/', function(request, response) {
response.send('Hello World!');
});
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
