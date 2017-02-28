var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/err', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('err', { title: 'hhttt' });
});

module.exports = router;
