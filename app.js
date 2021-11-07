const express = require('express')
const exphbs = require('express-handlebars')
// const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')

const routes = require('./routes')
const usePassport = require('./config/passport')

const app = express()
const PORT = 3000

//Setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
//Setting middleware
app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))
// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(express.urlencoded({ extended: true }))
// Setting method-override 路由覆蓋機制
app.use(methodOverride('_method'))
// Setting Passport
usePassport(app)
// Setting get user data & authenticated state to hbs
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated
  res.locals.user = req.user
  next()
})
// 將 request 導入路由器
app.use(routes)

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})