const { Router } = require('express')
const { updateTestimonial, deleteTestimonial } = require('../controllers/testimonials.controller')
const { requireAuth } = require('../middlewares/requireAuth')
const router = Router()

router.put('/:id', updateTestimonial)

router.delete('/:id', requireAuth, deleteTestimonial)

module.exports = router