/*
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-10-17 20:10:54
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-11-23 21:06:38
 * @FilePath: /blog/server/app.js
 * @Description: 配置
 */
const express = require('express')
const multer = require('multer')
const path = require('path')
const { db } = require('./db/DbUtils')
const app = express()
const port = 8080

app.use(express.json())

// 跨域请求
app.use((req, res, next) => {
  // 允许跨域
  res.header('Access-Control-Allow-Origin', '*')
  // 允许header的类型
  res.header('Access-Control-Allow-Header', '*')
  // 允许跨域请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE, POST, GET, PUT, OPTIONS')
  if (req.methods === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})

const upload = multer({
  dest: './public/upload/temp'
})
app.use(upload.any())
app.use(express.static(path.join(__dirname, 'public')))

// 对每个接口增加token校验
const ADMIN_TOKEN_PATH = '/_token'
app.all('*', async(req, res, next) => {
  if (req.path.indexOf(ADMIN_TOKEN_PATH) > -1) {
    let { token } = req.headers
    let adming_token_sql = 'SELECT * FROM `admin` WHERE `token` = ?'
    let adminResult = await db.async.all(adming_token_sql, [token])
    if ( adminResult.err || adminResult.rows.length === 0) {
      res.send({
        code: 403,
        msg: '请先登录'
      })
      return
    } else {
      next()
    }
  } else {
    next()
  }
})

app.use('/admin', require('./routers/AdminRouter'))
app.use('/category', require('./routers/CategoryRouter'))
app.use('/blog', require('./routers/BlogRouter'))
app.use('/upload', require('./routers/UpdateRouter'))



app.get('/', (req, res) => {
  res.send('hellw word')
})

app.listen(port, () => {
  console.log(`success:http://localhost:${port}`)
})