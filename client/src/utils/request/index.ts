/*
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-11-04 17:37:16
 * @LastEditors: jinjian jian.jin3@gientech.com
 * @LastEditTime: 2022-11-15 19:39:42
 * @FilePath: /blog/client/src/utils/request/index.ts
 * @Description: 封装axios
 */
import axios, { Axios, AxiosResponse, AxiosRequestConfig } from 'axios'
import { errorCodeType } from './error-code-type'
import { useMessage } from 'naive-ui'
import { AdminStore } from '../../store/AdminStore'


// 处理  类型“AxiosResponse<any, any>”上不存在属性“errorinfo”。ts(2339) 脑壳疼！关键一步。
declare module "axios" {
  interface AxiosResponse<T = any> {
    errorinfo: null;
    msg: string
  }
  export function create(config?: AxiosRequestConfig): AxiosInstance
}

// 创建axios实例
const service = axios.create({
    // 服务接口请求
    baseURL: import.meta.env.VITE_APP_BASE_API,
    // 超时设置
    timeout: 15000,
    headers:{'Content-Type':'application/json;charset=utf-8'}
})

const msg = useMessage()

// 请求拦截
service.interceptors.request.use((config: AxiosRequestConfig) => {
  const adminStore = AdminStore()
  // get请求映射params参数
  if (config.method === 'get' && config.params) {
      let url = config.url + '?';
      for (const propName of Object.keys(config.params)) {
          const value = config.params[propName];
          var part = encodeURIComponent(propName) + "=";
          if (value !== null && typeof(value) !== "undefined") {
                // 对象处理
              if (typeof value === 'object') {
                  for (const key of Object.keys(value)) {
                      let params = propName + '[' + key + ']';
                      var subPart = encodeURIComponent(params) + "=";
                      url += subPart + encodeURIComponent(value[key]) + "&";
                  }
              } else {
                  url += part + encodeURIComponent(value) + "&";
              }
          }
      }
      url = url.slice(0, -1);
      config.params = {};
      config.url = url;
  }
  return {
    ...config,
    headers: {
      'token': adminStore.token,
    }
  }
}, error => {
    Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((res:any) => {
    // 未设置状态码则默认成功状态
    const code = res.data['code'] || 200;
    // 获取错误信息
    const m = errorCodeType(code) || res.data['msg']
    if(code === 200){
      return Promise.resolve(res.data)
    }else{
        msg.error(m)
        return Promise.reject(res.data)
    }
  },
  error => {
    let { message } = error;
    if (message == "Network Error") {
        message = "后端接口连接异常";
    }
    else if (message.includes("timeout")) {
        message = "系统接口请求超时";
    }
    else if (message.includes("Request failed with status code")) {
        message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    msg.error(
        message,
        {duration: 5 * 1000}
    )
    return Promise.reject(error)
  }
)

export default service