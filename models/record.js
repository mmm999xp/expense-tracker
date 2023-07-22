//這個檔案會管理所有的支出紀錄(expense record)資料
//載入這隻檔案等於取得資料庫中的支出紀錄(expense record)資料
const mongoose = require('mongoose')
const Schema =  mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    index: true,
    required: true
  },
  userId: {  
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true
  }
})

module.exports = mongoose.model('Record' , recordSchema)