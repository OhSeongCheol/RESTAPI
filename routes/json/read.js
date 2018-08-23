var express = require('express');
var router = express.Router();
var Item = require('../../instance/item');


// DB Model

/* GET home page. */
router.get('/', function(req, res, next) {

  Item.find(function(error, items){
  //Select Documents at 'items' collections in MongoDB
  
      if(error){
          console.log(error);
      }else{
          res.json(items);
          //res.render('main', { items: items });

      }
    })

    
});

module.exports = router;
