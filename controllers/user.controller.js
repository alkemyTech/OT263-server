const  db  = require('../models')

const createUser = async (user) => {
    const newUser = await db.User.create(user)
    console.log(newUser)
    return newUser.toJSON()
}

module.exports = {
    createUser
}