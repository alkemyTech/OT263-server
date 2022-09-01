const { getNewsById } = require('../controllers/news.controller')

router.get('/news/:id', getNewsById)