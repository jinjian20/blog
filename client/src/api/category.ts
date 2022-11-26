/*
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-11-10 21:59:00
 * @LastEditors: jinjian jian.jin3@gientech.com
 * @LastEditTime: 2022-11-19 16:10:32
 * @FilePath: /blog/client/src/api/category.ts
 * @Description: 分类管理
 */
import api from '../utils/request'

// 获取列表
export const getCategory = () => {
  return api.get('/category/list')
}

namespace Category {
  export interface AddCategoryReq {
    name: string
  }
  export interface categoryRes {
    msg: string
  }
  export interface editCategoryReq {
    id?: string
    name?: string
  }
}
// 新增分类
export const addCategory = (params: Category.AddCategoryReq) => {
  return api.post<Category.categoryRes>('/category/_token/add', params)
}

// 修改分类
export const editCategory = (params: Category.editCategoryReq) => {
  return api.put<Category.categoryRes>('/category/_token/update', params)
}

// 删除分类
export const deleteCategory = (query: Category.editCategoryReq) => {
  return api.delete<Category.categoryRes>(`/category/_token/delete?id=${query.id}`)
}