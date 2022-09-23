const { Router } = require('express')
const { updateTestimonial, createTestimonial, deleteTestimonial, getTestimonials } = require('../controllers/testimonials.controller')
const { requireAdmin } = require('../middlewares/requireAdmin')
const { requireAuth } = require('../middlewares/requireAuth')
const router = Router()

router.put('/:id', requireAuth, requireAdmin, updateTestimonial)
router.post('/', requireAuth, createTestimonial);
router.delete('/:id', requireAuth, requireAdmin , deleteTestimonial)
router.get('/', getTestimonials)

module.exports = router
