var express = require('express');
var router = express.Router();


/////My Module////
var logger = require('../../instance/winston');
var Data = require('../../instance/data');
var domain = require('../../instance/domain');
/////My Module////

router.post('/', function (req, res, next) {
    logger.info(domain + req.baseUrl);

    var oldItem = req.body.oldItem;
    var newItem = req.body.newItem;

    Data.findOne({ task: oldItem }, function (error, item) {
        if (error || item == null) {
            console.log('Failed to Update : NotExist Item');
            res.json({ success: 0 });
        } else {
            item.task = newItem;
            item.save(function (error, modified_item) {
                if (error) {
                    console.log('Failed to Update');
                    res.json({ success: 0 });

                } else {
                    console.log("Successed to Update");
                    res.json({ success: 1 });

                }
            });
        }
    });



});

module.exports = router;
