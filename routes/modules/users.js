// 引用 Express 與 Express 路由器
const express = require('express')
const User = require('../../models/user')
const router = express.Router()

router.get('/login', (req,res)=>{
  res.render('login')
})

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', (req, res) => {
  // 取得註冊表單參數
  const { name, email, password, confirmPassword } = req.body
  // 檢查使用者是否已經註冊
  User.findOne({ email }).then(user => {
    // 如果已經註冊：退回原本畫面
    if (user) {
      let emailError = '該組email已經被註冊過!'
      res.render('register', {
        emailError,
        name,
        email,
        password,
        confirmPassword
      })
    } else {
      // 如果還沒註冊：寫入資料庫
      return User.create({
        name,
        email,
        password
      })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
    }
  })
    .catch(err => console.log(err))
})

module.exports = router