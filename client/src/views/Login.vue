<!--
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-11-02 21:13:59
 * @LastEditors: jinjian jian.jin3@gientech.com
 * @LastEditTime: 2022-11-14 19:41:48
 * @FilePath: /blog/client/src/views/Login.vue
 * @Description: 登录
-->
<template>
   <div class="login">
    <n-card title="登录">
      <n-form ref="formRef" :model="loginForm" :rules="rules">
        <n-form-item path="account" label="用户名">
          <n-input v-model:value="loginForm.account" placeholder="请输入用户名" />
        </n-form-item>
        <n-form-item path="password" label="密码">
          <n-input v-model:value="loginForm.password" type="password" placeholder="请输入密码"/>
        </n-form-item>
      </n-form>
      <template #footer>
        <n-checkbox v-model:checked="loginForm.remember" label="记住我" />
        <n-button
          strong
          secondary
          type="primary"
          @click="handleLogin">
          登录
        </n-button>
      </template>
    </n-card>
   </div>
</template>

<script lang="ts" setup>
import { login } from '../api/login'
import { AdminStore } from '../store/AdminStore'
import { useRouter } from 'vue-router'

const adminStore = AdminStore()
const message = inject<any>('message')
const router = useRouter()

const loginForm = reactive({
  account: localStorage.getItem('account') || '',
  password: localStorage.getItem('password') || '',
  remember: localStorage.getItem('remember') || false
})

const rules = {
  account: [
    { required: true, message: '请输入用户名', trigger: 'blur'},
    { min: 3, max: 12, message: '账号长度在3-5个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur'},
    { min: 6, max: 18, message: '账号长度在6-18个字符', trigger: 'blur' }
  ],
}

const handleLogin = async () => {
  try {
    const loginParams = {
      account: loginForm.account,
      password: loginForm.password,
    }
    let res = await login(loginParams)
    adminStore.token = res.data.token
    adminStore.id = res.data.id
    adminStore.account = res.data.account
    // 记住我
    if (loginForm.remember) {
      localStorage.setItem('account', loginForm.account)
      localStorage.setItem('password', loginForm.password)
      localStorage.setItem('remember', loginForm.remember ? '1' : '0')
    }

    // 跳转
    router.push('/dashboard')
    message.success('登录成功')
  } catch(err) {
    message.error('登录失败')
  }
}

</script>
<style scoped lang="scss">
.login {
  width: 500px;
  margin: 0 auto;
  margin-top: 130px;
}
</style>