var express = require('express');
var router = express.Router();

/////My Module////
var logger = require('../../instance/winston');
var Data = require('../../instance/data');
var domain = require('../../instance/domain');
/////My Module////


/* GET home page. */
router.get('/', function (req, res, next) {
    logger.info(domain + req.baseUrl);
    Data.find(function (error, items) {
        //Select Documents at 'items' collections in MongoDB
        if (error) {
            console.log('Failed to Read');
        } else {
            console.log('Success to Read');
            res.json({ items, success: 1 });
        }
    })
});

module.exports = router;
