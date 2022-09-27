var express = require('express');
var router = express.Router();
const {
    findOrganizationById,
    createOrganization,
    updateOrganization,
} = require('../controllers/organization.controller');
const { requireAdmin } = require('../middlewares/requireAdmin');
const { requireAuth } = require('../middlewares/requireAuth');

router.get('/:id/public', findOrganizationById);
router.post('/', requireAuth, requireAdmin, createOrganization);
router.put('/:id', requireAuth, requireAdmin, updateOrganization);

module.exports = router;
