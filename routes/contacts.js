const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middlewares/requireAuth')
const { requireAdmin } = require('../middlewares/requireAdmin')
const { getContacts, postContacts } = require('../controllers/contacts.controller');
const { body } = require('express-validator');

router.get('/', getContacts);
router.post('/',
  body('email').notEmpty().isEmail(),
  body('name').notEmpty().isLength({ min: 3 }),
  postContacts)

module.exports = router;
