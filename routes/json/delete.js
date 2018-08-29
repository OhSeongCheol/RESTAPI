var express = require('express');
var router = express.Router();

/////My Module////
var logger = require('../../instance/winston');
var Data = require('../../instance/data');
var domain = require('../../instance/domain');
/////My Module////


router.post('/', function (req, res, next) {
  logger.info(domain + req.baseUrl);
  //logging

  var deleteTask = req.body.contents;

  // Get data in Request 
  Data.findOne({ task: deleteTask }, function (error, item) {
    if (item == null) {
      console.log('Failed to Delete : NotExist Item ');
      res.json({ success: 0 });

    }
    else {
      Data.remove({ task: deleteTask }, function (error, output) {
        //DELETE * FROM datas WHERE task = deleteTask 
        if (error) {
          console.log('Failed to Delete');
          res.json({ success: 0 });
        }
        else {
          console.log('Successed to Delete');
          res.json({ success: 1 });
        }
      });
    }
  });
});



module.exports = router;
