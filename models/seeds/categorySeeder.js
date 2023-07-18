//取得catagory model
const Category = require('../category')

//取得db連線
const db = require('../../config/mongoose')
db.once('open',()=>{
  Promise
  .all([
    Category.create({
      name: '家居物業',
      image: 'https://fontawesome.com/icons/home?style=solid'
    }),
    Category.create({
      name: '交通出行',
      image: 'https://fontawesome.com/icons/shuttle-van?style=solid'
    }),
    Category.create({
      name: '休閒娛樂',
      image: 'https://fontawesome.com/icons/grin-beam?style=solid'
    }),
    Category.create({
      name: '餐飲食品',
      image: 'https://fontawesome.com/icons/utensils?style=solid'
    }),
    Category.create({
      name: '其他',
      image: 'https://fontawesome.com/icons/pen?style=solid'
    })
  ])
    .then(() => {
      console.log('新增catagory種子資料完成'),
      process.exit()
})

  
  
})