const express = require('express')
const router = express.Router()
const { requireAuth } = require('../middlewares/requireAuth')
const { requireAdmin } = require('../middlewares/requireAdmin')
const {createMember} = require('../controllers/members.controller');

router.post('/', requireAuth, requireAdmin, createMember)


module.exports = router;