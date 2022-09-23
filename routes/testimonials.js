const { Router } = require("express");
const {
    getTestimonials,
    findTestimonial,
    updateTestimonial,
    createTestimonial,
    deleteTestimonial,
} = require("../controllers/testimonials.controller");
const { requireAdmin } = require("../middlewares/requireAdmin");
const { requireAuth } = require("../middlewares/requireAuth");
const router = Router();

router.get("/", getTestimonials);
router.get("/:id", findTestimonial);
router.put("/:id", requireAuth, requireAdmin, updateTestimonial);
router.post("/", requireAuth, createTestimonial);
router.delete("/:id", requireAuth, requireAdmin, deleteTestimonial);

module.exports = router;
