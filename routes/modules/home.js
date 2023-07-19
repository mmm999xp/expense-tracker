// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')
let categorys = []

router.get('/', (req, res) => {

 if(!categorys.length){
   Category.find()
     .lean()
     .then(data => data.forEach((item) => {
       categorys.push(item.name)
     }))
 }
  
  Record.find()
  .lean()
  .then((data)=>{
    res.render('index', { data, categorys })
  })
  .catch((error)=>{console.log(error)})
})


module.exports = router