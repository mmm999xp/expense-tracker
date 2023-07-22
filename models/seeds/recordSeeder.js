//取得record model
const Record = require('../record')
//取得catagory model
const Category = require('../category')
//取得user model
const User = require('../user')
//取得db連線
const db = require('../../config/mongoose')
const bcrypt = require('bcryptjs')

const SEED_USER = {
  name: 'root',
  email: 'root@example.com',
  password: '12345678'
}


db.once('open', () => {
  bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(SEED_USER.password, salt))
    .then(hash => User.create({
      name: SEED_USER.name,
      email: SEED_USER.email,
      password: hash
    }))
  .then((user) =>{
    const userId = user._id
    Promise
      .all([
        Category.findOne({ name: '家居物業' })
          .then((obj) => {
            return Record.create({
              name: '買房子',
              date: '2023-07-21',
              amount: 15000000,
              categoryId: obj._id,
              userId: userId
            })
          }),
        Category.findOne({ name: '交通出行' })
          .then((obj) => {
            return Record.create({
              name: '坐飛機',
              date: '2023-05-08',
              amount: 88000,
              categoryId: obj._id,
              userId: userId
            })
          }),
        Category.findOne({ name: '休閒娛樂' })
          .then((obj) => {
            return Record.create({
              name: '潛水',
              date: '2023-02-21',
              amount: 30000,
              categoryId: obj._id,
              userId: userId
            })
          }),
        Category.findOne({ name: '餐飲食品' })
          .then((obj) => {
            return Record.create({
              name: '高級酒店消費',
              date: '2023-07-01',
              amount: 120000,
              categoryId: obj._id,
              userId: userId
            })
          }),
        Category.findOne({ name: '其他' })
          .then((obj) => {
            return Record.create({
              name: '教育活動',
              date: '2023-04-20',
              amount: 50000,
              categoryId: obj._id,
              userId: userId
            })
          })
      ])
      .then(() => {
        console.log('新增record種子資料完成')
        process.exit()
      })
  })


  
  
  
})