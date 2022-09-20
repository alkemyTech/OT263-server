const { Router } = require('express')
const { updateTestimonial, deleteTestimonial } = require('../controllers/testimonials.controller')
const { requireAdmin } = require('../middlewares/requireAdmin')
const { requireAuth } = require('../middlewares/requireAuth')
const router = Router()

router.put('/:id', updateTestimonial)

router.delete('/:id', requireAuth, requireAdmin , deleteTestimonial)

module.exports = router