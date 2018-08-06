var express = require('express');
var router = express.Router();

var Item = require('../instance/item');
// DB Model

router.get('/', function(req, res, next) {
  console.log('Create action not supported GET method');
  res.render('main', { title: 'Express' });
});

//Create Action by POST Method
router.post('/', function(req, res, next) {
    var data = req.body.data;
    // Get 'data' Parameter using body-parser module in POST Request 

    var newItem = new Item({contents:data});
    // Make new DB Model haved 'data' parameter
    
    newItem.save(function(error, data){
      if(error){
          console.log(error);
      }else{
          console.log('Saved!')
      }
    });
    // Save in MongoDB

    res.render('main', { title: 'Express' });
    //Rendering main.jade
  });

module.exports = router;
