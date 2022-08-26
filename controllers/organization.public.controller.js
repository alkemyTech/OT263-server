const { Testimonials } = require('../models')

const createTestimonial = async function(req,res) {
  const {name, image, phone, address, welcomeText} = req.body;
  Testimonials.create({
    name: name,
    image: image,
    phone: phone,
    address: address,
    welcomeText: welcomeText
  }).then(testimonial => res.json(testimonial));
}

const testimonialsOrganizations = async function(req, res) {
  const id = req.params.id
  const listOfTestimonials = await Testimonials.findByPk(id);
  const {name, image, phone, address, welcomeText} = listOfTestimonials;
  res.json({
    name: name,
    image: image,
    phone: phone,
    address: address,
    welcomeText: welcomeText,
  })
}

module.exports = {
  testimonialsOrganizations,
  createTestimonial
}