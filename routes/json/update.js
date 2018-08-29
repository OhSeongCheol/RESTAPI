var express = require('express');
var domain = require('../../instance/domain');

var router = express.Router();
var Item = require('../../instance/item');
var Data = require('../../instance/data');
var logger = require('../../instance/winston');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('main', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var oldItem = req.body.oldItem;
  var newItem = req.body.newItem;
  logger.info(domain + req.baseUrl); 

  Data.findOne({task:oldItem}, function(error,item){
    if(error){
        console.log(error);
    }else{
      item.task = newItem;
      item.save(function(error,modified_item){
            if(error){
                console.log(error);
            }else{
                console.log("Success update");
            }
        });
    }
});
  /*
  Item.findOne({contents:oldItem}, function(error,item){
    if(error){
        console.log(error);
    }else{
      item.contents = newItem;
      item.save(function(error,modified_item){
            if(error){
                console.log(error);
            }else{
                // console.log("Success update");
            }
        });
    }
});*/

//res.render('ajax', { title: 'Express' });
res.json({success:1});

});

module.exports = router;
