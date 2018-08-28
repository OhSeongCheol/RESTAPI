var express = require('express');
var router = express.Router();

var Item = require('../../instance/item');
var Data = require('../../instance/data');
// DB Model

//Create Action by POST Method
router.post('/', function(req, res, next) {
  var data = req.body.contents;
  // Get 'data' Parameter using body-parser module in POST Request 
    var newItem = new Item({contents:data});

    var createData = new Data();

    createData.task=req.body.task;
    createData.flow=req.body.flow;
    createData.x=req.body.x;
    createData.y=req.body.y;
    createData.time=req.body.time; 
    
    Data.countDocuments(function(error, data){
      createData.id=data+1;
      createData.save(function(error, data){
        if(error){
            console.log("Error to save");
        }else{
            console.log('Saved!')
        }
      });
    })

    

    /*
    newItem.save(function(error, data){
      if(error){
          console.log(error);
      }else{
          console.log('Saved!')
      }
    });
    */
    // Save in MongoDB
    res.json({success:1});
  });

module.exports = router;
