var mongoose = require('./mongoose')

// Setting Schema 
var data = mongoose.Schema({
    id : 'string',
    task : 'string',
    flow : 'string',
     x : 'string',
     y : 'string',
     time : 'string'
    });

// Casting item to Model
// for use as DB Model
var data = mongoose.model('Data', data);

module.exports = data;
