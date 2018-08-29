var express = require('express');
var router = express.Router();

/////My Module////
var logger = require('../../instance/winston');
var Data = require('../../instance/data');
var domain = require('../../instance/domain');
/////My Module////

// Create Action by POST Method
router.post('/', function (req, res, next) {
  logger.info(domain + req.baseUrl);
  // Logging

  var createData = new Data();
  createData.task = req.body.task;
  createData.flow = req.body.flow;
  createData.x = req.body.x;
  createData.y = req.body.y;
  createData.time = req.body.time;
  // data parsing

  Data.countDocuments(function (error, data) {
    //Read to count that data document in DB

    createData.id = data + 1;
    //And id is count+1

    createData.save(function (error, data) {
      //insert Data to DB
      if (error) {
        console.log('Failed to create');
      } else {
        console.log('Successed to create')
      }
    });
  })

  res.json({ success: 1 });
});

module.exports = router;
