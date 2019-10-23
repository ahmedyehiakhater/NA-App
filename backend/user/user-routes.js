const express = require('express');
const router = express.Router();
const userModel = require('./user-model');

let saveUser = (user) => {
  user.save().then(
    doc => {
      console.log(doc);
    },
    error => {
      console.log(error);
    }
  );
}
/**
 * Get All Users
 */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});
/**
 * Save a single user with a username
 */
router.post('/', (req, res, next) => {
  res.status(200).send(req.body);
  let user = new userModel({
    'username': req.body.username
  });
  saveUser(user);
})

module.exports = router;
