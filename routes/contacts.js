const express = require('express');
const router = express.Router();
const {
    getContacts,
    postContacts,
} = require('../controllers/contacts.controller');
const { validationMiddleware } = require('../middlewares/validationMiddleware');
const { contactSchema } = require('../util/contact.joi');

router.get('/', getContacts);
router.post('/', validationMiddleware(contactSchema, 'body'), postContacts);

module.exports = router;
