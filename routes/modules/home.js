// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Record = require('../../models/record')


router.get('/', (req, res) => {
  Record.find()
  .lean()
  .then((data)=>{
    res.render('index', { data })
  })
  .catch((error)=>{console.log(error)})
})


module.exports = router