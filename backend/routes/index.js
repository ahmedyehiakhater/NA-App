var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/userlist', (req, res) => {
  console.log("Inside user list");
  // const db = req.db;
  const collection = db.usercollections.find({});
});

module.exports = router;
