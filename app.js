const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes/index')
const app = express()

//設定渲染引擎
app.engine('hbs',exphbs({ defaultLayout:'main',extname:'.hbs'}))
app.set('view engine' , 'hbs')

// 將 request 導入路由器
app.use(routes)



app.listen(3000,()=>{
  console.log('http://localhost:3000')
})