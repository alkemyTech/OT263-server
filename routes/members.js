var express = require("express");
var router = express.Router();
const { body } = require('express-validator');
const { updateMember, deleteMember, getMembers } = require('../controllers/members.controller')
const { requireAuth } = require("../middlewares/requireAuth");
const { requireAdmin } = require("../middlewares/requireAdmin");


router.delete('/:id', requireAuth, requireAdmin, deleteMember)

router.put('/:id',
  body('name').notEmpty().isLength({ min: 3 }),
  requireAuth,
  requireAdmin,
  updateMember
)

router.get('/', requireAuth, requireAdmin, getMembers)

module.exports = router;