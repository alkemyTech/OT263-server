const express = require("express");
const router = express.Router();
const {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategories,
} = require("../controllers/categories.controller");
const { requireAuth } = require("../middlewares/requireAuth");
const { requireAdmin } = require("../middlewares/requireAdmin");
const { validationMiddleware } = require("../middlewares/validationMiddleware");
const {
    updateCategorySchema,
    createCategorySchema,
    findCategorySchema,
} = require("../util/category.joi");

router.use(requireAuth, requireAdmin);

router.get("/", getCategories);
router.post(
    "/",
    validationMiddleware(createCategorySchema, "body"),
    createCategory
);
router.put(
    "/:id",
    validationMiddleware(findCategorySchema, "params"),
    validationMiddleware(updateCategorySchema, "body"),
    updateCategory
);
router.delete(
    "/:id",
    validationMiddleware(findCategorySchema, "params"),
    deleteCategory
);

module.exports = router;
