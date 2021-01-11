var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
  res.cookie('hello', 'another world', { domain: 'https://32173453b81f.ngrok.io', httpOnly: true })
  res.render('index', { title: 'Express' });
});

module.exports = router;
