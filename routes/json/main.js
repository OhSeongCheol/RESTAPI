var express = require('express');

var router = express.Router();
var domain = require('../../instance/domain');
var url = require('../../instance/url');
/* GET home page. */
router.get('/', function(req, res, next) {

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
          title: 'Express',
          teststr: 'teststr' });
      });
});

module.exports = router;
