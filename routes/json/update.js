var express = require('express');

var router = express.Router();
var Item = require('../../instance/item');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('main', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var oldItem = req.body.oldItem;
  var newItem = req.body.newItem;

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
});

//res.render('ajax', { title: 'Express' });

});

module.exports = router;
