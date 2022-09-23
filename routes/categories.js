const express = require('express')
const router = express.Router()
const { requireAuth } = require('../middlewares/requireAuth')
const { requireAdmin } = require('../middlewares/requireAdmin')
const { createCategory, updateCategory, deleteCategory, getCategories } = require('../controllers/categories')

router.delete('/:id', deleteCategory)

//router.use(requireAuth, requireAdmin)

router.post('/', createCategory)

router.put('/:id', updateCategory)

router.get('/', getCategories)

module.exports = router
