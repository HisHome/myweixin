var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   console.log('----eee--')
  res.render('index.hbs', { title: 'hhttt' });
});

module.exports = router;
