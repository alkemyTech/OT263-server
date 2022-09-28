const { testimonials } = require('../models');
const createHttpError = require('http-errors');

class TestimonialsController {
    constructor() {}

    getTestimonials = async (req, res, next) => {
        try {
            const allTestimonials = await testimonials.findAll();
            return res.status(200).json(allTestimonials);
        } catch (err) {
            next(err);
        }
    };

    findTestimonial = async (req, res, next) => {
        const { id } = req.params;
        try {
            const testimonial = await testimonials.findByPk(id);
            if (!testimonial)
                throw createHttpError(404, 'Testimonio no encontrado');

            return res.status(200).json(testimonial);
        } catch (err) {
            next(err);
        }
    };

    updateTestimonial = async (req, res, next) => {
        try {
            const [row] = await testimonials.update(req.body, {
                where: { id: req.params.id },
            });
            if (!row) throw createHttpError(404, 'Testimonio no encontrado');

            return res.status(200).json(req.body);
        } catch (err) {
            next(err);
        }
    };

    createTestimonial = async (req, res, next) => {
        const { name, content, image } = req.body;
        try {
            const newTestimonial = await testimonials.create({
                name,
                content,
                image,
            });

            return res.status(201).json(newTestimonial);
        } catch (err) {
            next(err);
        }
    };

    deleteTestimonial = async (req, res, next) => {
        const { id } = req.params;
        try {
            const row = await testimonials.destroy({
                where: { id: id },
            });
            if (!row) throw createHttpError(404, 'Testimonio no encontrado');

            return res.status(204).send();
        } catch (err) {
            next(err);
        }
    };
}

module.exports = TestimonialsController;
