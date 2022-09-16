var express = require("express");
var router = express.Router();
const { getMembers } = require('../controllers/members.controller')
const { requireAuth } = require("../middlewares/requireAuth");
const { requireAdmin } = require("../middlewares/requireAdmin");

router.get('/', requireAuth, requireAdmin, getMembers)

module.exports = router;