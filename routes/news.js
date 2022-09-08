const express = require('express')
const router = express.Router()
const { requireAuth } = require('../middlewares/requireAuth')
const { requireAdmin } = require('../middlewares/requireAdmin')
const { updateEntry } = require('../controllers/entries')
const { getNewsById, deleteNews } = require('../controllers/news.controller')

router.use(express.json())
router.use(requireAuth)
router.use(requireAdmin)

router.put('/:id', updateEntry)
router.get('/:id', getNewsById)
router.delete('/:id', deleteNews)

module.exports = router
