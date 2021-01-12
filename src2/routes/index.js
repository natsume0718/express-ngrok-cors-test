var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.append('Set-Cookie', 'hello=thirdparty; HttpOnly; SameSite=none; Secure;')
  res.status(200).send('Express 2');
});

module.exports = router;
