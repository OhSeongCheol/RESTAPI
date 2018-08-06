var mongoose = require('./mongoose')

// Setting Schema 
var item = mongoose.Schema({
      contents : 'string'
    });

// Casting item to Mode
// for use as DB Model
var Item = mongoose.model('Item', item);

module.exports = Item;