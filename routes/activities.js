const express = require('express')
const { requireAuth } = require('../middlewares/requireAuth')
const { requireAdmin } = require('../middlewares/requireAdmin')
const { createActivity } = require('../controllers/activities.controller')
const router = express.Router()

router.post('', requireAuth, requireAdmin, createActivity)

module.exports = router