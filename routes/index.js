//總路由器
const express = require('express')
const home = require('./modules/home')
const expense = require('./modules/expense')
const filter = require('./modules/filter')
const router = express.Router()



//引入路由模組
router.use('/expense', expense)
router.use('/filter' , filter)
router.use('/', home)

//匯出路由器
module.exports = router