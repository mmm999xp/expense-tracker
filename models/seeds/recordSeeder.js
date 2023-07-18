//取得record model
const Record = require('../record')
//取得catagory model
const Category = require('../category')

//取得db連線
const db = require('../../config/mongoose')
db.once('open', () => {
  Promise
  .all([
    Category.findOne({ name: '家居物業' })
      .then((obj) => {
        return Record.create({
          name: '買房子',
          date: Date.now(),
          amount: 15000000,
          categoryId: obj._id
        })
      }),
    Category.findOne({ name: '交通出行' })
      .then((obj) => {
        return Record.create({
          name: '坐飛機',
          date: Date.now(),
          amount: 88000,
          categoryId: obj._id
        })
      }),
    Category.findOne({ name: '休閒娛樂' })
      .then((obj) => {
        return Record.create({
          name: '潛水',
          date: Date.now(),
          amount: 30000,
          categoryId: obj._id
        })
      }),
    Category.findOne({ name: '餐飲食品' })
      .then((obj) => {
        return Record.create({
          name: '高級酒店消費',
          date: Date.now(),
          amount: 120000,
          categoryId: obj._id
        })
      }),
    Category.findOne({ name: '其他' })
      .then((obj) => {
        return Record.create({
          name: '教育活動',
          date: Date.now(),
          amount: 50000,
          categoryId: obj._id
        })
      })
  ])
   .then(()=>{
      console.log('新增record種子資料完成')
      process.exit()
  })
  
  
})