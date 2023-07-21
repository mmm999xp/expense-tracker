// 引用 Express 與 Express 路由器
const express = require('express')
const checkData = require('../../lib/checkData')
const Category = require('../../models/category')
const Record = require('../../models/record')
const router = express.Router()


//新增頁面
router.get('/new', (req, res) => {
  Category.find()
    .lean()
    .then(categorys => res.render('new', { categorys }))
    .catch(err => console.log(err))
})
//編輯頁面
router.get('/:id', (req, res) => {
  const _id = req.params.id
  let categorys = []
    Category.find()
      .lean()
      .then((categoryData) => {
        //將搜尋得到的categoryData 存放到外部宣告的categorys，以便後續使用
        categorys = categoryData
        return Record.findOne({ _id }).lean()
      })
      .then((data) => {
        categorys.forEach((i) =>{
          i.selected = i._id.toString() === data.categoryId.toString()
        })
        res.render('edit', { data, categorys })
        })
      .catch(err => console.log(err))
})

//新增功能
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
//編輯功能
router.put('/:id' , (req,res)=>{
  const _id = req.params.id
  if (checkData(req.body)){
    let { name, date, categoryId, amount } = req.body
    Record.findOne({ _id })
    .then((data)=>{
      data.name = name,
      data.date = date,
      data.categoryId = categoryId,
      data.amount = amount
      return data.save()
    })
    .then(()=> res.redirect('/'))
    .catch(err => console.log(err))
  }
})
//刪除功能
router.delete('/:id', (req, res) => {
  const _id = req.params.id 
  return Record.findOne({ _id })
    .then(data => data.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


module.exports = router