// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引入模組程式碼
const home = require('./modules/home')
const users = require('./modules/users')
const todos = require('./modules/todos')

// 將網址結構符合 / 字串的 request 導向 home 模組 
router.use('/', home)
router.use('/users', users)
router.use('/todos', todos)

// 匯出路由器
module.exports = router