const express = require('express')
const router = express.Router()
const  {genid, db} = require('../db/DbUtils')

router.get('/search', async(req, res) => {
  let {keyword, categoryId, page, pageSize} = req.query

  // 给默认值
  page = !page ? 1 : page
  pageSize = !pageSize ? 10 : pageSize
  categoryId = !categoryId ? 0 : categoryId
  keyword = !keyword ? '' : keyword

  let whereSql = []
  let params = []
  if (categoryId !== 0) {
    whereSql.push(' `category_id` = ? ')
    params.push(categoryId)
  }
  if (keyword !== '') {
    whereSql.push(' (`title` LIKE ? OR `content` LIKE ?) ')
    params.push('%'+ keyword +'%')
    params.push('%'+ keyword +'%')
  }

  let whereStr = ''
  if (whereSql.length > 0) {
    whereStr = ' WHERE' + whereSql.join(' AND ')
  }

  // 查分页
  let searchSql = 'SELECT `id`,`create_time`,`category_id`,`title`,substr(`content`,0,50) AS `content` FROM `blog`' + whereStr + ' ORDER BY `create_time` DESC LIMIT ?,?'
  let searchParams = params.concat([(page - 1) * pageSize, pageSize])


  // 查总数
  let searchCountSql = 'SELECT count(*) FROM `blog`' + whereStr
  let searchCountParams = params

  let searchResult = await db.async.all(searchSql, searchParams)
  let searchCount = await db.async.all(searchCountSql, searchCountParams)

  if (searchResult.err === null || searchCount.err === null) {
    res.send({
      code: 200,
      msg: '查询成功',
      data: {
        rows: searchResult.rows,
        count: searchCount.rows[0]['count(*)']
      }
    })
  }
  if (searchResult.rows === null || searchCount.rows === null) {
    res.send({
      code: 500,
      msg: '查询失败'
    })
  }

})

router.post('/_token/add', async(req, res) => {
  let{title, content, categoryId} = req.body
  let id = genid.NextId()
  let createTime = new Date().getTime()
  let insert_sql = 'INSERT INTO `blog` (`title`, `content`, `category_id`, `id`, `create_time`) VALUES (?,?,?,?,?)'
  let {err, rows} = await db.async.run(insert_sql, [title, content, categoryId, id, createTime])
  if (err === null) {
      res.send({
        code: 200,
        msg: '添加成功'
      })
  } else {
    res.send({
      code: 500,
      msg: '添加失败'
    })
  }
})

router.put('/_token/update', async(req, res) => {
  let{id, title, content, categoryId} = req.body
  let endTime = new Date().getTime()

  let update_sql = 'UPDATE `blog` SET `title` = ?, `content` = ?, `category_id` = ?, `end_time` = ? WHERE `id` = ?'

  let {err, rows} = await db.async.run(update_sql, [title, content, categoryId, endTime, id])
  if (err === null) {
    res.send({
      code: 200,
      msg: '修改成功'
    })
  } else {
    res.send({
      code: 500,
      msg: '修改失败'
    })
  }
})

router.delete('/delete', async(req, res) => {
  let {id} = req.query
  
  let delete_sql = 'DELETE FROM `blog` WHERE `id` = ?'
  let {err, rows} = await db.async.run(delete_sql, [id])
  if (err === null) {
    res.send({
      code: 200,
      msg: '删除成功'
    })
  } else {
    res.send({
      code: 500,
      msg: '删除失败'
    })
  }
})

router.get('/detail', async(req, res) => {
  let { id } = req.query
  let detail_sql = "SELECT * FROM `blog` WHERE `id` = ?"
  let {err, rows} = await db.async.all(detail_sql, [id])
  if (err === null) {
    res.send({
      code: 200,
      data: rows,
      msg: '查询成功'
    })
  } else {
    res.send({
      code: 500,
      msg: '查询失败'
    })
  }
})

module.exports = router