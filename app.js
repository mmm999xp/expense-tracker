const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes/index')
const app = express()
//僅在非正式環境時, 使用 doten載入環境變數
if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}
//引用mongoose設定檔
require('./config/mongoose')

//設定渲染引擎
app.engine('hbs',exphbs({ 
  defaultLayout:'main',
  extname:'.hbs'
}))
app.set('view engine' , 'hbs')

// 將 request 導入路由器
app.use(routes)



app.listen(3000,()=>{
  console.log('http://localhost:3000')
})