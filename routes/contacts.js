var express = require("express");
var router = express.Router();
const { body } = require('express-validator');
const { postContacts } = require('../controllers/contacts.controller')


router.post('/',
  body('email').notEmpty().isEmail(),
  body('name').notEmpty().isLength({ min: 3 }),
  postContacts)


module.exports = router;