// MongoDB Config                  //
// Mongoose in JS === JDBC in Java //

// 1. Load mongoose
var mongoose = require('mongoose');

// 2. Setting testDB
mongoose.connect('mongodb://localhost:27017/node');

// 3. Load Connected testDB 
var db = mongoose.connection;

// 4. If connection fail,
db.on('error', function(){
    console.log('Connection Failed!');
});
// 5. If connection success,
db.once('open', function() {
    console.log('Connected!');
});

module.exports = mongoose;