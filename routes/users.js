var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");

const UserController = require("../controllers/user.controller");

const controller = new UserController();

router.get("/", function (req, res, next) {
    res.send("respond with a resource");
});

router.get(
    "/auth/me",
    jwt.verify(req.headers.authorization, process.env.JWT_SECRET), 
    async function (req, res, next) {
        try {
            const userId = req.user.sub;
            const user = await  controller.getUserById(userId);
            if (!user) {
                res.status(404).send("User not found");
            }
            res.send(user);
        } catch (err) {
            next(err); 
        }
    }
);

module.exports = router;
