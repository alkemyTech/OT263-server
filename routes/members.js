var express = require("express");
var router = express.Router();
const { getMember } = require('../controllers/members.controller')
const { requireAuth } = require("../middlewares/requireAuth");
const { requireAdmin } = require("../middlewares/requireAdmin");

router.get('/', requireAuth, requireAdmin, getMember)

module.exports = router;