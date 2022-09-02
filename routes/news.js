var express = require('express');
var router = express.Router();
const {newsList } = require('../controllers/news.controller')

/* GET news list. */

router.get('/', newsList);

module.exports = router;

