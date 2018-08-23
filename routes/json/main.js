var express = require('express');

var router = express.Router();
var domain = require('../../instance/domain');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(domain);
  console.log(req.baseUrl);
  res.render('ajax', { domain: domain });
});

module.exports = router;
