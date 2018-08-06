// MongoDB Config                  //
// Mongoose in JS === JDBC in Java //

// 1. Load mongoose
var mongoose = require('mongoose');

// 2. Setting node Database in MongoDB
mongoose.connect('mongodb://localhost:27017/node');

// 3. Load Connected node Database 
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
// To use this module, add under code

// var mongoose = require('PATH:/instance/mongoose')
