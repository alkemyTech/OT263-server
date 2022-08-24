var express = require("express");
var router = express.Router();
const { requireAuth } = require("../middlewares/requireAuth");

const UserController = require("../controllers/user.controller");

const controller = new UserController();

router.get("/", function (req, res, next) {
    res.send("respond with a resource");
});

router.get(
    "/auth/me",
    requireAuth,
    async function (req, res, next) {
        try {
            const userId = req.user.sub;
            const user = await  controller.getUserById(userId);
            res.send(user);
        } catch (err) {
            next(err); 
        }
    }
);

module.exports = router;
