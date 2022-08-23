const schema = require('../util/user.joi')
const  db  = require('../models')
const { createHash } = require('../util/bycrypt')

const createUser =async (req, res) => {
    try {
        const value = await schema.validateAsync({...req.body})
        const newUser = await db.User.create({...value, password:createHash(value.password)})    
        return res.json(newUser)
    }
    catch (err) {        
        return res.status(400).json(err)
    }
}

module.exports = createUser