const express = require('express');
const router = express.Router();
const { newsList, getNewsById } = require('../controllers/news.controller')

/* GET news list. */

router.get('/', newsList);

router.get('/:id', getNewsById)

module.exports = router
