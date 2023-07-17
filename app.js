const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

//設定渲染引擎
app.engine('hbs',exphbs({ defaultLayout:'main',extname:'.hbs'}))
app.set('view engine' , 'hbs')


app.get('/', (req,res)=>{
  res.render('index')
})

app.listen(3000,()=>{
  console.log('http://localhost:3000')
})