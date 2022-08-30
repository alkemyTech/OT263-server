const { User } = require('../models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { createToken } = require('../services/token')


const loginUser = async function(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email, password} = req.body;
  const user = await User.findOne({ where: {email: email} });
  
  if(!user){
    return res.status(404).json({error: "User Doesn't Exist", ok: false})
  } else {
    bcrypt.compare(password, user.password).then((match) => {
      if(!match){
        return res.json({error: "Wrong Username And Password Combination", ok: false});
      }
    const payload = { user: user.id, roleId: user.roleId }
    const token = createToken(payload)
    return res.json( {token: token} )
    })
  }
}

module.exports = loginUser;