var mongoose = require('./mongoose')

// Setting Schema 
var URL = mongoose.Schema({
      contents : 'string'
    });

// Casting item to Model
// for use as DB Model
var urlModel = mongoose.model('URL', URL);
var createURL;
var updateURL;
var deleteURL;
var readURL;

urlModel.find(function(error, url){
  //Select Documents at 'items' collections in MongoDB
  if(error){
        console.log(error);
        console.log('Failed load to URL');
      }else{
        createURL = url[0].contents;
        readURL = url[1].contents;
        updateURL = url[2].contents;
        deleteURL = url[3].contents;

      }
      console.log("----1---");

      console.log("---1----");

    }

)


module.exports = urlModel;
