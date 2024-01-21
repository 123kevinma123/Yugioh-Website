var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello from our server!')
  console.log("I am the muffin man");
});

module.exports = router;
