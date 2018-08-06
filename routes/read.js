var express = require('express');

var router = express.Router();

var Item = require('../instance/item');

/* GET home page. */
router.get('/', function(req, res, next) {
  Item.find(function(error, items){
      console.log('--- Read all ---');
      if(error){
          console.log(error);
      }else{
          console.log();
          
          res.render('main', { items: items });
      }
    })
      
});

module.exports = router;
