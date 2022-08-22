var express = require('express');
const crearUsuario = require('../controllers/user.auth.controller');


var usersRouter = express.Router();

/* GET users listing. */
usersRouter.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

usersRouter.post('/auth/register', crearUsuario)

module.exports = usersRouter;
