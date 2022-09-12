var express = require('express');
var router = express.Router();
const { requireAuth } = require("../middlewares/requireAuth");
const { requireAdmin } = require("../middlewares/requireAdmin");

const CategoryController = require("../controllers/category.controller");
const controller = new CategoryController();

router.patch('/:id', requireAuth, requireAdmin, controller.updateCategory);

router.post('/', requireAuth, requireAdmin, controller.createCategory); // POST created for testing purposes

module.exports = router;