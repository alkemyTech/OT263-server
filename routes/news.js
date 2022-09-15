const express = require('express')
const router = express.Router()
const { requireAuth } = require('../middlewares/requireAuth')
const { requireAdmin } = require('../middlewares/requireAdmin')
const { updateEntry } = require('../controllers/entries')
const { getNewsById, createNews, newsList } = require('../controllers/news.controller')


router.get('/', newsList);
router.put('/:id', requireAuth, requireAdmin, updateEntry)
router.get('/:id', getNewsById)
router.post('/', createNews);

module.exports = router
