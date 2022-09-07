const express = require('express');
const router = express.Router();

const {updateActivities} = require('../controllers/activities.controller');

router.put ('/:id', updateActivities);

module.exports = router