const express = require('express');
const router = express.Router();

const userRouter = require('./user.router');
const loginRouter = require('./login.router');
const todoRouter = require('./todo.router');
const verifyToken = require('../middlewares/verify');

router.use("/user", userRouter)
router.use("/login", loginRouter)
router.use("/todo", verifyToken, todoRouter)

module.exports = router;