var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   console.log('----eee--')
  res.render('index', { title:'首rerr哈哈哈ee页rrr'});
});

module.exports = router;
