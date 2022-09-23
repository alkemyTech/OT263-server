const express = require('express')
const router = express.Router()
const { requireAuth } = require('../middlewares/requireAuth')
const { requireAdmin } = require('../middlewares/requireAdmin')
const { createCategory, updateCategory, deleteCategory, getCategories } = require('../controllers/categories.controller')

router.use(requireAuth, requireAdmin)
router.get('/', getCategories)
router.delete('/:id', deleteCategory)


router.post('/', createCategory)

router.put('/:id', updateCategory)

module.exports = router
