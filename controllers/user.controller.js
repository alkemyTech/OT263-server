const { User } = require("../models/");
const createError = require("http-errors");

class UserController {

    constructor() {}

    async getUserById(id) {
        const user = await User.findByPk(id);
        if (!user) {
            throw createError.NotFound("User not found");
        }
        return user;
    }
}

module.exports = UserController;