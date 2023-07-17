const mongoose = require('mongoose')
//連線資料庫
mongoose.connect(process.env.MONGODB_URI ,{
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

//取得資料庫的連線狀態
const db = mongoose.connection

db.on('error' , ()=>{
  console.log('資料庫連線失敗!')
})
db.once('open' , ()=>{
  console.log('資料庫連線成功')
})

//匯出模組
module.exports = db