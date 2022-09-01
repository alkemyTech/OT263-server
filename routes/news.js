const express = require('express');
const router = express.Router();
const { getNewsById } = require('../controllers/news.controller')

router.get('/:id', getNewsById)

module.exports = router