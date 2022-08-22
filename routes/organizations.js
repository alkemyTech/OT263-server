var express = require('express');
var router = express.Router();
const {Organizations} = require('../models')

/* GET organizations listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  
});

router.get('/1/public', async function(req, res) {
  const listOfOrganizations = await Organizations.findAll();
  const {name, image, phone, address, welcomeText} = listOfOrganizations;
  res.json({
    name: name,
    image: image,
    phone: phone,
    address: address,
    welcomeText: welcomeText,
  })
})

module.exports = router;
