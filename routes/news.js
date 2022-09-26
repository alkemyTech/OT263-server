const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middlewares/requireAuth');
const { requireAdmin } = require('../middlewares/requireAdmin');
const { validationMiddleware } = require('../middlewares/validationMiddleware');
const {
    findNewsSchema,
    createNewsSchema,
    updateNewsSchema,
} = require('../schemas/news.joi');

const NewsController = require('../controllers/news.controller');
const controller = new NewsController();

router.get('/', controller.newsList);
router.get('/:id', controller.getNewsById);
router.post(
    '/',
    requireAuth,
    requireAdmin,
    validationMiddleware(createNewsSchema, 'body'),
    controller.createNews
);
controller.createNews;
router.put(
    '/:id',
    requireAuth,
    requireAdmin,
    validationMiddleware(findNewsSchema, 'params'),
    validationMiddleware(updateNewsSchema, 'body'),
    controller.updateNews
);
router.delete(
    '/:id',
    requireAuth,
    requireAdmin,
    validationMiddleware(findNewsSchema, 'params'),
    controller.deleteNews
);

module.exports = router;
