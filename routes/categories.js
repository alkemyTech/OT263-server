var express = require('express');
var router = express.Router();
const { requireAuth } = require("../middlewares/requireAuth");
const { requireAdmin } = require("../middlewares/requireAdmin");

const CategoryController = require("../controllers/category.controller");
const controller = new CategoryController();

router.put('/:id', requireAuth, requireAdmin, controller.updateCategory);

module.exports = router;