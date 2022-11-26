<!--
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-11-23 12:27:54
 * @LastEditors: jinjian jian.jin3@gientech.com
 * @LastEditTime: 2022-11-23 14:54:52
 * @FilePath: /blog/client/src/components/Header.vue
 * @Description: 头部
-->
<template>
  <div class="header">
    <div class="header-title">
      <a href="/">
        <span class="header-title-name">🐱</span>
        一斤斤
      </a>
    </div>
    <div class="header-menu">
      <a href="/">
        <span class="action">
          <n-icon>
            <FishOutline />	
          </n-icon>
        </span>
        首页
      </a>
      <a href="/dashboard/category">
        <span class="action">
          <n-icon>
            <DiamondOutline />	
          </n-icon>
        </span>
        分类
      </a>
      <a href="/login">
        <span class="action">
          <n-icon>
            <HappyOutline />	
          </n-icon>
        </span>
        登录
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  HappyOutline,
  FishOutline,
  DiamondOutline
} from '@vicons/ionicons5'
</script>
<style scoped lang="scss">
.header {
  position: absolute;
  top: 0;
  height: 60px;
  width: 100%;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
  box-sizing: border-box;
  text-shadow: 1px 1px 2px rgb(0 0 0 / 30%);

  &-title {
    &-name {
      margin-right: 5px;
    }
    a {
      color: #fff;
      font-size: 24px;
      font-family: Kanit;
      text-decoration: none;
      cursor: pointer;
    }
  }

  &-menu {
    display: flex;
    position: relative;
    a {
      font-size: 18px;
      color: #fff;
      text-decoration: none;
      padding-bottom: 5px;
      margin-left: 25px;
    }
  }
}
.action {
  line-height: 0;
   vertical-align: -3px;
}
a:hover {
  color : #f38988;
}
</style>