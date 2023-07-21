// 引用 Express 與 Express 路由器
const express = require('express')
const User = require('../../models/user')
const router = express.Router()

router.get('/login', (req,res)=>{
  res.render('login')
})

router.get('/register', (req, res) => {
  res.render('register')
})


module.exports = router