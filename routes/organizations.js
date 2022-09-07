var express = require('express');
var router = express.Router();
const {
  findOrganizationById, 
  createOrganization
} = require('../controllers/organization.controller')


/* GET organizations listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  
});

router.get('/:id/public', findOrganizationById)

router.post('/public', createOrganization)

module.exports = router;
