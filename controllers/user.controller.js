const sequelize=require('../db')
const {DataTypes} =require('sequelize')
const  User  = require('../models/user')(sequelize, DataTypes)

async function connectDB() {
    try {
        await sequelize.sync({ force: false });
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectDB()


const createUser = async (user) => {
    const newUser = await User.create(user)
    console.log(newUser)
    return newUser.toJSON()
}

module.exports = {
    createUser
}