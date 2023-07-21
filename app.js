const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes/index')
const methodOverride = require('method-override')
const app = express()

//引用mongoose設定檔
require('./config/mongoose')

//設定渲染引擎
app.engine('hbs',exphbs({ 
  defaultLayout:'main',
  extname:'.hbs'
}))
app.set('view engine' , 'hbs')
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
// 將 request 導入路由器
app.use(routes)



app.listen(3000,()=>{
  console.log('http://localhost:3000')
})