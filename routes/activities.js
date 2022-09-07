const express = require('express')
const { createActivity } = require('../controllers/activities.controller')
const router = express.Router()

router.post('', createActivity)

module.exports = router