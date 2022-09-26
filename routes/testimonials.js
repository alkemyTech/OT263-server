const { Router } = require('express');
const { requireAdmin } = require('../middlewares/requireAdmin');
const { requireAuth } = require('../middlewares/requireAuth');
const { validationMiddleware } = require('../middlewares/validationMiddleware');
const {
    findTestimonialSchema,
    updateTestimonialSchema,
    createTestimonialSchema,
} = require('../schemas/testimonial.joi');

const TestimonialsController = require('../controllers/testimonials.controller');
const controller = new TestimonialsController();

const router = Router();

router.get('/', controller.getTestimonials);
router.get(
    '/:id',
    validationMiddleware(findTestimonialSchema, 'params'),
    controller.findTestimonial
);
router.put(
    '/:id',
    requireAuth,
    requireAdmin,
    validationMiddleware(findTestimonialSchema, 'params'),
    validationMiddleware(updateTestimonialSchema, 'body'),
    controller.updateTestimonial
);
router.post(
    '/',
    requireAuth,
    validationMiddleware(createTestimonialSchema, 'body'),
    controller.createTestimonial
);
router.delete(
    '/:id',
    requireAuth,
    requireAdmin,
    validationMiddleware(findTestimonialSchema, 'params'),
    controller.deleteTestimonial
);

module.exports = router;
