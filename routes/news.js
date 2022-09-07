const express = require('express');
const router = express.Router();
const { getNewsById, createNews } = require('../controllers/news.controller')

router.get('/:id', getNewsById)
router.post('/', createNews);

module.exports = router