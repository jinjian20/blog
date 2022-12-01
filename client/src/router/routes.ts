/*
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-11-01 22:10:56
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-11-30 21:17:53
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
    path: '/details',
    component: () => import('@/views/Details.vue'),
  },
  {
    path: '/category',
    component: () => import('@/views/Category.vue'),
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