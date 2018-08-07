var express = require('express');

var router = express.Router();
var Item = require('../instance/item');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('main', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var oldData = req.body.oldData;
  var newData = req.body.newData;

  
  Item.findOne({contents:oldData}, function(error,item){
    if(error){
        console.log(error);
    }else{
      item.contents = newData;
      item.save(function(error,modified_item){
            if(error){
                console.log(error);
            }else{
                // console.log("Success update");
            }
        });
    }
});

res.render('main', { title: 'Express' });

});

module.exports = router;
