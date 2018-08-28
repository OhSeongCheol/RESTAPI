var express = require('express');
var router = express.Router();

var Item = require('../../instance/item');
var Data = require('../../instance/data');


router.post('/', function(req, res, next) {

  var contents = req.body.contents;
  // Get 'data' Parameter using body-parser module in POST Request 

  Data.remove({task:contents}, function(error,output){
    if(error){
        console.log(error);
    }
  });
/*
  Item.remove({contents:contents}, function(error,output){
    if(error){
        console.log(error);
    }
  });*/
  //res.render('ajax', { title: 'Express' });
  res.json({success:1});

});
module.exports = router;
