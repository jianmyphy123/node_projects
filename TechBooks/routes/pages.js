var express = require('express');
var router = express.Router();

router.get('/about', function(req, res) {
  res.render('pages/about', {
    title: 'About TechBooks'
  });
});


module.exports = router;
