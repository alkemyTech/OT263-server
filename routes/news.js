var express = require('express');
const { requireAdmin, requireAuth } = require('../middlewares');
const { getNewsById } = require('../controllers/news.controller')
const {newsList } = require('../controllers/newsController')

var router = express.Router();

/* GET news list. */

router.get('/', newsList);

router.get('/news/:id', getNewsById);

module.exports = router;

