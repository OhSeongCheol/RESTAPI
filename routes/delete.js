var express = require('express');
var router = express.Router();

var Item = require('../instance/item');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('main', { title: 'Express' });
});
router.post('/', function(req, res, next) {

  var data = req.body.data;
  // Get 'data' Parameter using body-parser module in POST Request 

  Item.remove({contents:data}, function(error,output){
    console.log('--- Delete ---');
    if(error){
        console.log(error);
    }

    console.log('--- deleted ---');
  res.render('main', { title: 'Express' });
  });
});
module.exports = router;
