const express = require('express');
const router = express.Router();
const userService = require('./user.service')

/**
 * Get All Users
 */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});
/**
 * Save a single user with a username
 */
router.route('/').
  post(userService.saveUser);

module.exports = router;
