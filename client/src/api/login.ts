/*
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-11-06 18:40:31
 * @LastEditors: jinjian jian.jin3@gientech.com
 * @LastEditTime: 2022-11-08 15:17:04
 * @FilePath: /blog/client/src/api/login.ts
 * @Description: 登录
 */
import api from '../utils/request'

namespace Login {
  // 用户登录表单
  export interface LoginReqForm {
    account: string;
    password: string;
  }
  // 登录成功后返回的token
  export interface LoginResData {
    id: number;
    account: string;
    token: string;
  }
}
// 用户登录
export const login = (params: Login.LoginReqForm) => {
  // 返回的数据格式可以和服务端约定
  return api.post<Login.LoginResData>('/admin/login', params)
}