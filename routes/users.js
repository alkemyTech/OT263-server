const express = require('express');
const router = express.Router();
const createUser = require('../controllers/user.auth.controller')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
})
router.post('/auth/register', createUser)

module.exports = router;
