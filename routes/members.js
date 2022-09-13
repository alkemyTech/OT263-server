var express = require("express");
var router = express.Router();
const { body } = require('express-validator');
const { updateMember } = require('../controllers/members.controller')


router.put('/:id',
  body('name').notEmpty().isLength({ min: 3 }),
  updateMember
)

module.exports = router;