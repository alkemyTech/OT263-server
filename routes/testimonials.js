var express = require('express');
var router = express.Router();
const {requireAuth} = require('../middlewares/requireAuth');
const {requireAdmin} = require('../middlewares/requireAdmin');

const TestimonialsController = require('../controllers/testimonials.controller');

const controller = new TestimonialsController();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
    }
);

router.post('/', requireAuth, requireAdmin, controller.createTestimonial);

module.exports = router;