// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

const { authenticator } = require('../middleware/auth')

// 引入模組程式碼
const home = require('./modules/home')
const users = require('./modules/users')
const todos = require('./modules/todos')

// 將網址結構符合 / 字串的 request 導向 home 模組 
router.use('/users', users)
router.use('/todos', authenticator, todos)
router.use('/', authenticator, home)

// 匯出路由器
module.exports = router