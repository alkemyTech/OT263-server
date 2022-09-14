var express = require("express");
var router = express.Router();
const { deleteMember } = require('../controllers/members.controller')
const { requireAuth } = require("../middlewares/requireAuth");
const { requireAdmin } = require("../middlewares/requireAdmin");


router.delete('/:id', requireAuth, requireAdmin, deleteMember)


module.exports = router;