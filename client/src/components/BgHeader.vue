<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-11-29 22:17:08
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-11-30 21:05:31
 * @FilePath: /blog/client/src/components/BgHeader.vue
 * @Description: 带有背景图的头部
-->
<template>
  <div class="bcg">
    <Header />
    <h1 class="bcg-title">{{ props.title }}</h1>
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import { withDefaults } from 'vue'

interface Props {
  title: string,
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
})

console.log(props.title)
</script>
<style scoped lang="scss">
.bcg {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/img/header.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;

  &-title {
    font-size: 35px;
    color: #fff;
  }
}
</style>