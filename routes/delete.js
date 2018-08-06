var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('main', { title: 'Express' });
});
router.post('/', function(req, res, next) {

  res.render('main', { title: 'Express' });
});
router.delete('/', function(req, res, next) {

  //
    //Real Delete Action Logic
  //
res.render('main', { title: 'Express' });
});
module.exports = router;
