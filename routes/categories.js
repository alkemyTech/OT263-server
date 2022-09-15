const express = require('express')
const router = express.Router()
const { requireAdmin } = require('../middlewares/requireAdmin')
const { requireAuth } = require('../middlewares/requireAuth')
const { createCategory } = require('../controllers/categories')

router.use(requireAuth, requireAdmin)

router.post('/', createCategory)

module.exports = router
