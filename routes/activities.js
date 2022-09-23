const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middlewares/requireAuth')
const { requireAdmin } = require('../middlewares/requireAdmin')
const { ActivitiesController } = require('../controllers/activities.controller');

const controller = new ActivitiesController();

router.use(requireAuth, requireAdmin)

router.get('/', controller.updateActivities);
router.post('/', controller.createActivity);
router.put ('/:id', controller.updateActivities);

module.exports = router