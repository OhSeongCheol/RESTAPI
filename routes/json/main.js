var express = require('express');

var router = express.Router();


/////My Module////
var logger = require('../../instance/winston');
var domain = require('../../instance/domain');
var url = require('../../instance/url');
/////My Module////


/* GET home page. */
router.get('/', function (req, res, next) {
  var title = "NodeJS"
  logger.info(domain + req.baseUrl);

  url.find(function (error, url) {
    //Select Documents at 'urls' collections in MongoDB
    //This Collection have CRUD URL like /json/1 etc..

    if (error) {
      console.log('Failed to load URL');
    } else {
      createURL = url[0].contents;
      readURL = url[1].contents;
      updateURL = url[2].contents;
      deleteURL = url[3].contents;

    }
    res.render('ajax', {
      domain: domain,
      createURL: createURL,
      readURL: readURL,
      updateURL: updateURL,
      deleteURL: deleteURL,
      title: title,
      success: 1
    });
    // Rendering ajax.ejs
    // Path $PROJECT_HOME/views/ajax.ejs
  });
});

module.exports = router;
