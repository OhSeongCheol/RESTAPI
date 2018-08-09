var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('get /');
  res.render('ajax', { title: 'Express' });
});

module.exports = router;
