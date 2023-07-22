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
       categorys.push({ 
        name: item.name,
        icon: item.icon,
        categoryId: item._id
      })
     }))
 }
  const userId = req.user._id //獲取使用者的id
  Record.find({ userId })
  .lean()
  .then((data)=>{
    data.forEach((i)=>{
      categorys.find(category => {
        if (category.categoryId.toString() === i.categoryId.toString()){
          i.icon = category.icon
        }
      })
    })
    res.render('index', { data, categorys })
  })
  .catch((error)=>{console.log(error)})
})


module.exports = router