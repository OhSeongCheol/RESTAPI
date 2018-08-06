var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('main', { title: 'Express' });
});

router.post('/', function(req, res, next) {

  res.render('main', { title: 'Express' });
});
router.put('/', function(req, res, next) {
    //
      //Real Update Action Logic
    //
  res.render('main', { title: 'Express' });
});

module.exports = router;
