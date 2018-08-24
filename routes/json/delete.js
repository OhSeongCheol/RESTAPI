var express = require('express');
var router = express.Router();

var Item = require('../../instance/item');


router.post('/', function(req, res, next) {

  var contents = req.body.contents;
  // Get 'data' Parameter using body-parser module in POST Request 

  Item.remove({contents:contents}, function(error,output){
    if(error){
        console.log(error);
    }
  });
  //res.render('ajax', { title: 'Express' });

});
module.exports = router;
