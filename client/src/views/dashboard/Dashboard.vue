<!--
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-11-08 16:21:06
 * @LastEditors: jinjian jian.jin3@gientech.com
 * @LastEditTime: 2022-11-08 21:48:13
 * @FilePath: /blog/client/src/views/dashboard/Dashboard.vue
 * @Description: 后台
-->
<template>
  <div class="main">
    <div class="main-menus">
      <div
        class="main-menus-menu"
        v-for="(item, index) in menus"
        :key="index"
        @click="toPage(item)">
        {{item.name}}
      </div>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { AdminStore } from '../../store/AdminStore'
import { useRouter } from 'vue-router'

interface Menu {
  name: string,
  href: string
}

const adminStore = AdminStore()
const router = useRouter()

const menus = [{
  name: '文章管理',
  href: '/dashboard/article'
}, {
  name: '分类管理',
  href: '/dashboard/category'
}, {
  name: '退出',
  href: 'logout'
}]

const toPage = (item: Menu) => {
  if (item.href === 'logout') {
    router.push('/login')
  } else {
    router.push(item.href)
  }
}
</script>
<style scoped lang="scss">
.main {
  width: 100%;
  height: 95vh;
  display: flex;
  color: #64676a;
  max-width: 1500px;
  margin: 0 auto;

  &-menus {
    width: 180px;
    height: 100%;
    text-align: center;
    line-height: 55px;
    padding: 20px 0;
    border-right: 1px solid #dadada;

    &-menu {
      cursor: pointer;
      &:hover {
        color: #fd76fd;
      }
    }
  }

  &-content {
    width: 100%;
    padding: 20px;
  }
}
</style>