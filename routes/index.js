//總路由器
const express = require('express')
const home = require('./modules/home')
const expense = require('./modules/expense')
const filter = require('./modules/filter')
const users = require('./modules/users')
const router = express.Router()
const { authenticator } = require('../middleware/auth')


//引入路由模組
router.use('/expense', authenticator, expense)
router.use('/filter', authenticator, filter)
router.use('/user', users)
router.use('/', authenticator,  home)

//匯出路由器
module.exports = router