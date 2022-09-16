var express = require('express')
var router = express.Router()
const multer = require('multer')
const {
	findOrganizationById,
	createOrganization,
	updateOrganization
} = require('../controllers/organization.controller')

const upload = multer({ dest: 'uploads/', name: 'image' })

/* GET organizations listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource')
})

router.put('/:id', upload.single('image'), updateOrganization)

router.get('/:id/public', findOrganizationById)

router.post('/', createOrganization)

module.exports = router
