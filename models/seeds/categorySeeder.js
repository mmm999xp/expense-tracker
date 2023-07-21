//取得catagory model
const Category = require('../category')

//取得db連線
const db = require('../../config/mongoose')
db.once('open',()=>{
  Promise
  .all([
    Category.create({
      name: '家居物業',
      icon: '<i class="fa-solid fa-house" style="font-size:4em;"></i>'
    }),
    Category.create({
      name: '交通出行',
      icon: '<i class="fa-solid fa-van-shuttle" style="font-size:4em;"></i>'
    }),
    Category.create({
      name: '休閒娛樂',
      icon: '<i class="fa-solid fa-face-grin-beam" style="font-size:4em;"></i>'
    }),
    Category.create({
      name: '餐飲食品',
      icon: '<i class="fa-solid fa-utensils" style="font-size:4em;"></i>'
    }),
    Category.create({
      name: '其他',
      icon: '<i class="fa-solid fa-pen" style="font-size:4em;"></i>'
    })
  ])
    .then(() => {
      console.log('新增catagory種子資料完成'),
      process.exit()
})

  
  
})