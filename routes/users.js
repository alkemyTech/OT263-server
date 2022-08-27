var express = require('express')
var router = express.Router()
const { body } = require('express-validator')
const loginUser = require('../controllers/user.auth.controller')
const { requireAuth } = require('../middlewares/requireAuth')
const UserController = require('../controllers/user.controller')

const controller = new UserController()

router.use(requireAuth)

/* GET users listing. */
router.get('/', async function (req, res, next) {
	res.send('respond with a resource')
})

router.post(
	'/auth/login',
	body('email').notEmpty().isEmail(),
	body('password').isLength({ min: 5 }),
	loginUser
)

router.delete('/:id', controller.deleteUser)

router.get('/auth/me', requireAuth, async function (req, res, next) {
	try {
		const userId = req.user.sub
		const user = await controller.getUserById(userId)
		res.send(user)
	} catch (err) {
		next(err)
	}
})

module.exports = router
