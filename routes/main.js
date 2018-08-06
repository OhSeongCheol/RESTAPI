var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('get /');
  res.render('main', { title: 'Express' });
});
/* GET home page. */
router.post('/', function(req, res, next) {
    console.log('post /');
  res.render('main', { title: 'Express' });
});

/* GET home page. */
router.put('/', function(req, res, next) {
    console.log('put /');
  res.render('main', { title: 'Express' });
});

/* GET home page. */
router.delete('/', function(req, res, next) {
    console.log('delete /');
  res.render('main', { title: 'Express' });
});
module.exports = router;
