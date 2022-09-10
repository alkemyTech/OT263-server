const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middlewares/requireAuth')
const { requireAdmin } = require('../middlewares/requireAdmin')
const { getContacts } = require('../controllers/contacts.controller');


router.use(requireAuth)
router.use(requireAdmin)

router.get('/', getContacts);

module.exports = router