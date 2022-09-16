var express = require("express");
var router = express.Router();
const { body } = require('express-validator');
const { updateMember } = require('../controllers/members.controller')
const { getMembers } = require('../controllers/members.controller')
const { requireAuth } = require("../middlewares/requireAuth");
const { requireAdmin } = require("../middlewares/requireAdmin");


router.put('/:id',
  body('name').notEmpty().isLength({ min: 3 }),
  updateMember
)

router.get('/', requireAuth, requireAdmin, getMembers)

module.exports = router;