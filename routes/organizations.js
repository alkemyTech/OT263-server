var express = require('express');
var router = express.Router();
const {
  testimonialsOrganizations, 
  createTestimonial
} = require('../controllers/organization.public.controller')


/* GET organizations listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  
});

router.get('/:id/public', testimonialsOrganizations)

router.post('/public', createTestimonial)

module.exports = router;
