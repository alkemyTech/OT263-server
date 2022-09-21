var express = require('express')
var router = express.Router()
const { body } = require('express-validator')
const { loginUser, createUser } = require('../controllers/user.auth.controller')
const { requireAuth } = require('../middlewares/requireAuth')

const UserController = require('../controllers/user.controller')
const { requireAdmin } = require('../middlewares/requireAdmin')

const controller = new UserController()

router.use(express.json())

router.get('/', requireAuth, requireAdmin, controller.getUsers)

router.post(
        '/auth/login',
        body('email').notEmpty().isEmail(),
        body('password').isLength({ min: 5 }),
        loginUser
)

router.get('/auth/me', requireAuth, async function (req, res, next) {
        try {
                const userId = req.user.sub
                const user = await controller.getUserById(userId)
          res.send(user)
        } catch (err) {
                next(err)
        }
})

router.post('/auth/register', createUser)

router.delete('/:id', requireAuth, controller.deleteUser)
module.exports = router
