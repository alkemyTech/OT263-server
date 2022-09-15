const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middlewares/requireAuth')
const { requireAdmin } = require('../middlewares/requireAdmin')
const { updateActivities } = require('../controllers/activities.controller');
const { createActivity } = require('../controllers/activities.controller')

router.put ('/:id', requireAuth, requireAdmin, updateActivities);
router.post('', requireAuth, requireAdmin, createActivity)

module.exports = router