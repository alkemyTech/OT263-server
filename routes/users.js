var express = require('express');
var router = express.Router();
const { loginUser, createUser } = require('../controllers/auth.controller');
const { requireAuth } = require('../middlewares/requireAuth');
const { requireAdmin } = require('../middlewares/requireAdmin');
const { validationMiddleware } = require('../middlewares/validationMiddleware');
const {
    createUserSchema,
    updateUserSchema,
    findUserSchema,
    loginUserSchema,
} = require('../util/user.joi');

const UserController = require('../controllers/user.controller');
const controller = new UserController();

router.use(express.json());

//To user controller
router.get('/', requireAuth, requireAdmin, controller.getUsers);
router.get('/auth/me', requireAuth, controller.getMe);
router.put(
    '/:id',
    requireAuth,
    validationMiddleware(findUserSchema, 'params'),
    validationMiddleware(updateUserSchema, 'body'),
    controller.updateUser
);
router.delete(
    '/:id',
    requireAuth,
    validationMiddleware(findUserSchema, 'params'),
    controller.deleteUser
);

//To auth controller
router.post(
    '/auth/register',
    validationMiddleware(createUserSchema, 'body'),
    createUser
);
router.post(
    '/auth/login',
    validationMiddleware(loginUserSchema, 'body'),
    loginUser
);

module.exports = router;
