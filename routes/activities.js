const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middlewares/requireAuth');
const { requireAdmin } = require('../middlewares/requireAdmin');
const { validationMiddleware } = require('../middlewares/validationMiddleware');
const {
    findActivitySchema,
    createActivitySchema,
    updateActivitySchema,
} = require('../util/activities.joi')

const {
    ActivitiesController,
} = require('../controllers/activities.controller');
const controller = new ActivitiesController();

router.use(requireAuth, requireAdmin);

router.get('/', controller.getActivities);
router.post(
    '/',
    validationMiddleware(createActivitySchema, 'body'),
    controller.createActivity
);
router.put(
    '/:id',
    validationMiddleware(findActivitySchema, 'params'),
    validationMiddleware(updateActivitySchema, 'body'),
    controller.updateActivities
);
router.delete(
    '/:id',
    validationMiddleware(findActivitySchema, 'params'),
    controller.deleteActivity
);

module.exports = router;
