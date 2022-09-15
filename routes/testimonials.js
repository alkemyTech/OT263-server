const { Router } = require('express')
const {requireAuth} = require('../middlewares/requireAuth');
const {requireAdmin} = require('../middlewares/requireAdmin');
const { updateTestimonial, createTestimonial } = require('../controllers/testimonials.controller')
const router = Router()

router.use(requireAuth, requireAdmin)

router.put('/:id', updateTestimonial)
router.post('/', createTestimonial);

module.exports = router
