const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')
const bcrypt = require('bcryptjs')
module.exports = app => {
  // 初始化 Passport 模組
  app.use(passport.initialize())
  app.use(passport.session())
  // 設定本地登入策略
  passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email })
      .then(user => {
        //檢測email是否被註冊過已經在routes/modules/users檢測過了
        //如果找不到user，直接return出去
        if (!user) {
          return done(null, false)
        }

        //return done(null, user)
        return bcrypt.compare(password, user.password).then(isMatch => {
          //檢測帳號與密碼是否正確已經在routes/modules/users檢測過了
           if (!isMatch) {
             return done(null, false)
           }
          return done(null, user)
        })
      })
      .catch(err => done(err, false))
  }))
  // 設定序列化與反序列化
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  passport.deserializeUser((id, done) => {
    User.findById(id)
      .lean()
      .then(user => done(null, user))
      .catch(err => done(err, null))
  })
}