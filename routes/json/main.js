var express = require('express');

var router = express.Router();
var domain = require('../../instance/domain');
var url = require('../../instance/url');

var logger = require('../../instance/winston');

/*
logger.error("error: 0");
logger.warn("warn: 1");
logger.info("info: 2");
logger.verbose("verbose: 3");
logger.debug("debug: 4");
logger.silly("silly: 5");
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  var title = "NodeJS"
  logger.info(domain + req.baseUrl); 
  url.find(function(error, url){
    //Select Documents at 'items' collections in MongoDB
    if(error){
          console.log(error);
          console.log('Failed load to URL');
        }else{
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
          success:1 });
      });
});

module.exports = router;
