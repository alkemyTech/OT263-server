const express = require('express');
const router = express.Router();
const { getContacts } = require('../controllers/contacts.controller');
const requireAdmin = require('../middlewares/requireAdmin');
const requireAuth = require('../middlewares/requireAuth');

router.get('/',[requireAuth, requireAdmin],  getContacts);

module.exports = router