var mongoose = require('./mongoose')

// Setting Schema 
var item = mongoose.Schema({
      contents : 'string'
    });

// Casting item to Model
// for use as DB Model
var Item = mongoose.model('Item', item);

Item.find(function(error, items){
  //Select Documents at 'items' collections in MongoDB
  
      if(error){
          console.log('testsetset');
          console.log(error);
      }else{
          console.log(items);
      }
    })


module.exports = Item;