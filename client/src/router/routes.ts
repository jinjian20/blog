/*
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-11-01 22:10:56
 * @LastEditors: jinjian jian.jin3@gientech.com
 * @LastEditTime: 2022-11-22 21:36:16
 * @FilePath: /blog/client/src/router/routes.ts
 * @Description: 路由
 */
export default [
  {
    path: '/',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    children: [{
      path: '/dashboard/article',
      component: () => import('@/views/dashboard/Article.vue'),
    }, {
      path: '/dashboard/category',
      component: () => import('@/views/dashboard/Category.vue'),
    }]
}]