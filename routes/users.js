var express = require('express');
var router = express.Router();
const { body } = require('express-validator');
const loginUser = require('../controllers/user.auth.controller');


/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/auth/login',
  body('email').notEmpty().isEmail(),
  body('password').isLength({ min: 5 }),
  loginUser)

module.exports = router;
