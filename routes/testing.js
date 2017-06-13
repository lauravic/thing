var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const context = {
    title: 'Testing',
    name: 'Laura',
    cat: 'Julio',
    musical: 'Rent',
    hobbies: ['reading', 'singing', 'drawing', 'other things']
  }
  res.render('testing', context);
});

module.exports = router;
