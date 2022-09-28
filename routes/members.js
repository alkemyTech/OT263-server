var express = require('express');
var router = express.Router();
const {
    updateMember,
    deleteMember,
    getMembers,
    createMember,
} = require('../controllers/members.controller');
const { requireAuth } = require('../middlewares/requireAuth');
const { requireAdmin } = require('../middlewares/requireAdmin');
const { validationMiddleware } = require('../middlewares/validationMiddleware');
const {
    createMemberSchema,
    updateMemberSchema,
    findMemberSchema,
} = require('../schemas/member.joi');

router.get('/', getMembers);
router.post(
    '/',
    validationMiddleware(createMemberSchema, 'body'),
    requireAuth,
    requireAdmin,
    createMember
);
router.put(
    '/:id',
    requireAuth,
    requireAdmin,
    validationMiddleware(findMemberSchema, 'params'),
    validationMiddleware(updateMemberSchema, 'body'),
    updateMember
);
router.delete(
    '/:id',
    requireAuth,
    requireAdmin,
    validationMiddleware(findMemberSchema, 'params'),
    deleteMember
);

module.exports = router;
