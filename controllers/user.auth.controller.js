const schema = require('./util/user.joi')
const { createHash } = require('./util/bycrypt');
const { createUser } = require('./user.controller');

const crearUsuario =async (req, res) => {
    try {
        const value = await schema.validateAsync({...req.body});
        const newUser=await createUser({...value, password:createHash(value.password)})
        console.log(newUser)
        return res.json(newUser)
    }
    catch (err) {
        console.log(err)
        return res.json(err)
    }
}

module.exports = crearUsuario