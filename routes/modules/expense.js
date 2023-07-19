// 引用 Express 與 Express 路由器
const express = require('express')
const checkData = require('../../lib/checkData')
const Category = require('../../models/category')
const Record = require('../../models/record')
const router = express.Router()



router.get('/new', (req, res) => {
  Category.find()
    .lean()
    .then(categorys => res.render('new', { categorys }))
})

router.post('/new',(req,res)=>{
  if (checkData(req.body)){
    let { name, date, categoryId , amount } = req.body

    Category.findById(categoryId)
    .then(()=>{
      Record.create({
        name: name,
        date: date,
        categoryId: categoryId,
        amount: amount
      }) 
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
    
    
  }
  
})


module.exports = router