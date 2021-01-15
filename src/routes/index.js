var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express POST' });
});

router.post('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://7c61732d7f26.ngrok.io');
  res.header("Access-Control-Allow-Method", "x-custom");
  res.send('hello');
});

module.exports = router;
