var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.append('Set-Cookie', 'hello=thirdparty; HttpOnly; SameSite=none; Secure;')
  res.render('index',{title: 'cors'});
});

module.exports = router;
