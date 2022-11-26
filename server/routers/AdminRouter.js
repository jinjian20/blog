/*
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-10-25 17:02:57
 * @LastEditors: jinjian jian.jin3@gientech.com
 * @LastEditTime: 2022-11-10 18:22:54
 * @FilePath: /blog/server/routers/AdminRouter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')
const router = express.Router()
const {v4:uuidv4} = require('uuid')
const {db, genid} = require('../db/DbUtils')

router.post('/login', async(req, res) => {
  let {account, password} = req.body

  let { err, rows} = await db.async.all('select * from `admin` where  `account` = ? AND `password` = ? ', [account, password])
  if (err === null && rows.length > 0) {
    let login_token = uuidv4()

    let update_token = 'UPDATE `admin` SET `token` = ? where `id` = ?'
    await db.async.run(update_token, [login_token,rows[0].id])

    let admin_info = rows[0]
    admin_info.token = login_token
    admin_info.password = ''

    res.send({
      code: 200,
      msg: '登录成功',
      data: admin_info
    })
  } else {
    res.send({
      code: 500,
      msg: '登录失败'
    })
  }
})

module.exports  = router