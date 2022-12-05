/*
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-11-19 16:07:42
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-05 21:36:27
 * @FilePath: /blog/client/src/api/blog.ts
 * @Description: 日志
 */
import api from '../utils/request'

namespace Blog {
  export interface AddBlogReq {
    title: string
    categoryId: string
    content: string
  }

  export interface Rows {
    id: string
    category_id: string
    content: string
    create_time: string
    title: string
    end_time: string 
  }

  export interface blogRes {
    msg: string
    rows: Rows[]
    count: number
  }

  export interface Page {
    page: number
    size: number
  }

  export interface Detail {
    id: string
  }
}

export const addBlog = (params: Blog.AddBlogReq) => {
  return api.post<Blog.blogRes>('/blog/_token/add', params)
}

export const getBlog = (query: Blog.Page) => {
  return api.get<Blog.blogRes>(`/blog/search?page=${query.page}&pageSize=${query.size}`)
}

export const detailBlog = (query: Blog.Detail) => {
  return api.get(`/blog/detail?id=${query.id}`)
}

export const deleteBlog = (query: Blog.Detail) => {
  return api.delete(`/blog/delete?id=${query.id}`)
}

export const updateBlog = (params: Blog.AddBlogReq) => {
  return api.put<Blog.blogRes>(`/blog/_token/update`, params)
}