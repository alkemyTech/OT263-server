var express = require('express');
const { requireAdmin, requireAuth } = require('../middlewares');

var router = express.Router();
const {newsList } = require('../controllers/newsController')

/* GET news list. */

router.get('/', newsList);

module.exports = router;