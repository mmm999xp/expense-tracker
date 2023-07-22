// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')
let categorys = []

router.get('/:categoryId', (req , res)=>{
  const category_Id = req.params.categoryId
  if (!categorys.length) {
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
  Record.find({ 
    categoryId: category_Id,
    userId: userId
   })
  .lean()
  .then((data) => {
    
    data.forEach((i) => {
      categorys.find(category => {
        if (category.categoryId.toString() === i.categoryId.toString()) {
          i.icon = category.icon
        }
        //如果前端傳送來的category_Id與category陣列的categoryId相同，則為其加上selected的布林值，以便樣板中顯示
        if (category.categoryId.toString() === category_Id){
           category.selected = true
         } else {
          category.selected = false
         }
      })
    })

    res.render('filter', { data, categorys })
  })
  .catch((error) => { console.log(error) })
})

module.exports = router