<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const { requireAuth } = require('../middlewares/requireAuth')
const { requireAdmin } = require('../middlewares/requireAdmin')
const {createMember} = require('../controllers/members.controller');

router.post('/', requireAuth, requireAdmin, createMember)

=======
var express = require("express");
var router = express.Router();
const { body } = require('express-validator');
const { updateMember } = require('../controllers/members.controller')
const { getMembers } = require('../controllers/members.controller')
const { requireAuth } = require("../middlewares/requireAuth");
const { requireAdmin } = require("../middlewares/requireAdmin");


router.put('/:id',
  body('name').notEmpty().isLength({ min: 3 }),
  requireAuth,
  requireAdmin,
  updateMember
)

router.get('/', requireAuth, requireAdmin, getMembers)
>>>>>>> 39829ff5e1334835896964416b2d71ce1550c91c

module.exports = router;