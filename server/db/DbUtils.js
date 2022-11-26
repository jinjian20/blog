/*
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-10-18 19:52:46
 * @LastEditors: jinjian jian.jin3@gientech.com
 * @LastEditTime: 2022-10-22 13:45:32
 * @FilePath: /blog/server/db/DbUtils.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const GenId = require('../utils/SnowFlake')

let db = new sqlite3.Database(path.join(__dirname, 'blog.sqlite3'))
const genid = new GenId({WorkerId: 1})

db.async = {}

db.async.all = (sql, params) => {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      resolve({ err, rows })
    })
  })
}

db.async.run = (sql, params) => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, (err, rows) => {
      resolve({ err, rows })
    })
  })
}

module.exports = { db, genid }