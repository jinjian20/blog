/*
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-11-01 20:44:18
 * @LastEditors: jinjian jian.jin3@gientech.com
 * @LastEditTime: 2022-11-08 15:41:51
 * @FilePath: /blog/client/src/main.ts
 * @Description: 配置
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index'
import api from './utils/request'
import naive from 'naive-ui'
import { createDiscreteApi } from 'naive-ui'

const { message, notification, dialog } = createDiscreteApi(['message', 'dialog', 'notification'])
const app = createApp(App)

app.provide('$api', api)
app.provide('message', message)
app.provide('notification', notification)
app.provide('dialog', dialog)

app.use(createPinia())
app.use(naive)
app.use(router)
app.mount('#app')