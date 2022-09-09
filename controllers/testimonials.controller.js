const { testimonials } = require('../models');
const { createTestimonialSchema } = require('../util/testimonial.joi');

class TestimonialsController {
    constructor() {}

    async createTestimonial(req, res) {
        try {    
            const { name, content, image } = req.body;
            const values = await createTestimonialSchema.validateAsync({ name, content, image });
            const newTestimonial = await testimonials.create(values);
            return res.status(201).json(newTestimonial);
        } catch (err) {
            return res.status(400).send({ message: err.message })
        }
    }
}

module.exports = TestimonialsController;