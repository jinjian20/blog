/*
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-11-01 21:28:39
 * @LastEditors: jinjian jian.jin3@gientech.com
 * @LastEditTime: 2022-11-08 16:35:31
 * @FilePath: /blog/client/src/router/index.ts
 * @Description: 路由
 */
import { createRouter,createWebHistory } from "vue-router"
import routes from '@/router/routes'

export default createRouter({
  history: createWebHistory(),
  routes
})