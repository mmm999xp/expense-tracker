//總路由器
const express = require('express')
const home = require('./modules/home')
const router = express.Router()



//引入路由模組
router.use('/', home)
//匯出路由器
module.exports = router