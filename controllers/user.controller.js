const { User } = require("../models/");

class UserController {

    constructor() {}

    async getUserById(id) {
        const user = await User.findByPk(id);
        return user;
    }
}

module.exports = UserController;