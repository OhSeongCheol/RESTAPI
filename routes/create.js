var express = require('express');
var http = require('http');
var router = express.Router();
var Item = require('../instance/item');

router.get('/', function(req, res, next) {

  let data;
  data = req.params.data;
  console.log(data);
  res.render('main', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    
    //
      //Real Create Action Logic
    //
    var data;
    data = req.body.data;
    console.log(data);


    var newItem = new Item({contents:data});
    console.log('newItem.contents');
    console.log(newItem.contents);
    console.log('newItem.contents');

    newItem.save(function(error, data){
      if(error){
          console.log(error);
      }else{
          console.log('Saved!')
      }
  });

    res.render('main', { title: 'Express' });
  });

module.exports = router;
