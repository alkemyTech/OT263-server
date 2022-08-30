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

    async getUsers(req, res){
        try{
            return res.status(200).json(await User.findAll())
        }catch(err){
            return res.send(err)
        }
    }
}

module.exports = UserController;