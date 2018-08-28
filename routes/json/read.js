var express = require('express');
var router = express.Router();
var Item = require('../../instance/item');
var Data = require('../../instance/data');


// DB Model

/* GET home page. */
router.get('/', function(req, res, next) {
    Data.find(function(error, items){
        //Select Documents at 'items' collections in MongoDB
        
            if(error){
                console.log(error);
            }else{
                res.json({items,success:1});
                //res.render('main', { items: items });
      
            }
          })

    /*
  Item.find(function(error, items){
  //Select Documents at 'items' collections in MongoDB
  
      if(error){
          console.log(error);
      }else{
          res.json(items);
          //res.render('main', { items: items });

      }
    })*/

    
});

module.exports = router;
