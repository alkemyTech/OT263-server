var express = require('express')
var router = express.Router()
const uploads = require('../services/uploads')
const {
	findOrganizationById,
	createOrganization,
	updateOrganization
} = require('../controllers/organization.controller')

/* GET organizations listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource')
})

router.put('/:id', uploads, updateOrganization)

router.get('/:id/public', findOrganizationById)

router.post('/', createOrganization)

module.exports = router
