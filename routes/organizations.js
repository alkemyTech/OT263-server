var express = require('express')
var router = express.Router()
const {
	findOrganizationById,
  createOrganization
} = require('../controllers/organization.controller')
const handleStorage = require('../middlewares/handleStorage')
const handleUpload = require('../middlewares/handleUpload')

/* GET organizations listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource')
})

router.get('/:id/public', findOrganizationById)

router.post('/', createOrganization)

module.exports = router
