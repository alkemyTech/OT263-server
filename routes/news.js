const express = require('express')
const router = express.Router()
const requireAuth = require('../middlewares/requireAuth')
const requireAdmin = require('../middlewares/requireAdmin')
const { updateEntry } = require('../controllers/entries')

router.use(express.json())
// router.use(requireAuth)
// router.use(requireAdmin)

router.put('/:id', updateEntry)

module.exports = router
