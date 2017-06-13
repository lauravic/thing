var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const context = {
    title: 'Profile',
    name: 'Laura',
    age: '14',
    position: 'Student',
    hobbies: ['reading', 'singing', 'drawing', 'other things']
  }
  res.render('profile', { title: 'Express' });
});

module.exports = router;
