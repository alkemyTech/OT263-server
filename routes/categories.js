const express = require('express')
const router = express.Router()
const { requireAuth } = require('../middlewares/requireAuth')
const { requireAdmin } = require('../middlewares/requireAdmin')
const { deleteCategory } = require('../controllers/categories')

router.use(requireAuth)
router.use(requireAdmin)

router.delete('/:id', deleteCategory)

module.exports = router
