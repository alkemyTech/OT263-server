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

<<<<<<< HEAD
router.delete('/:id', requireAuth, requireAdmin, deleteMember)

router.put('/:id',
  body('name').notEmpty().isLength({ min: 3 }),
  requireAuth,
  requireAdmin,
  updateMember
)

router.get('/', getMembers)
router.post('/', requireAuth, requireAdmin, createMember)

module.exports = router;
=======
module.exports = router;
>>>>>>> 3fffb79189265f898ef4461765600b035944ff67
