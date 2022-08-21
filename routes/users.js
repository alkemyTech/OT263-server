var express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { User } = require('../models');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  // res.send('respond with a resource');
  const listOfUsers = await User.findAll();
  res.json(listOfUsers)
});

router.post('/',
  body('email').notEmpty().isEmail(),
  body('password').isLength({ min: 5 }),
  async function(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;
    bcrypt.hash(password, 10).then((hash) => {
      User.create({
        email: email,
        password: hash,
      }).then(user => res.json(user));
    })
  }
)

router.post('/login',
  body('email').notEmpty().isEmail(),
  body('password').isLength({ min: 5 }),
  async function(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;
    const user = await User.findOne({ where: {email: email} });

    if(!user) res.json({error: "User Doesn't Exist", ok: false});
    bcrypt.compare(password, user.password).then((match) => {
      if(!match) res.json({error: "Wrong Username And Password Combination", ok: false});

      res.json(user)
    })
})

module.exports = router;
