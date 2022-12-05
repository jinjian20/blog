/*
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-11-01 20:44:18
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-04 21:13:49
 * @FilePath: /blog/client/src/main.ts
 * @Description: 配置
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index'
import api from './utils/request'
import { createDiscreteApi } from 'naive-ui'
import {
  // create naive ui
  create,
  // component
  NButton,
  NCheckbox,
  NIcon,
  NPagination,
  NCard,
  NForm,
  NFormItem,
  NInput,
  NSpace,
  NDataTable,
  NModal,
  NTabPane,
  NSelect,
  NTabs
} from 'naive-ui'

const naive = create({
  components: [NButton, NCheckbox, NIcon, NPagination, NCard, NForm, NInput, NSpace, NDataTable, NModal, NFormItem, NTabPane, NSelect, NTabs]
})

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