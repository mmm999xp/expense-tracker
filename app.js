const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const routes = require('./routes/index')
const methodOverride = require('method-override')
const usePassport = require('./config/passport')
const app = express()

//引用mongoose設定檔
require('./config/mongoose')

//設定渲染引擎
app.engine('hbs',exphbs({ 
  defaultLayout:'main',
  extname:'.hbs'
}))
app.set('view engine' , 'hbs')
//設定session
app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
//呼叫 Passport 函式並傳入 app
usePassport(app)

app.use((req, res, next) => {
  //設定本地變數，可供所有樣板使用
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  next()
})
// 將 request 導入路由器
app.use(routes)



app.listen(3000,()=>{
  console.log('http://localhost:3000')
})