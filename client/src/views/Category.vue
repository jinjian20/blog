<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-11-30 21:08:21
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-03 10:30:10
 * @FilePath: /blog/client/src/views/category.vue
 * @Description: 分类
-->
<template>
  <BgHeader title="分类"/>
  <div class="category">
    <div class="category-card">
      <div class="category-card-body">
        <div
          class="category-card-body-item"
          v-for="item in categoryOptions">
          <h2>{{ item['name'] }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCategory } from '../api/category'

let categoryOptions = ref([])

onMounted(() => {
  getCatefory()
})

// 获取分类
const getCatefory = async() => {
  const res = await getCategory()
  categoryOptions.value = res.data
}
</script>
<style scoped lang="scss">
.category {
  padding: 5% 10%;

  &-card {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 3px 8px 6px #07111b0d;
    border: 1px solid #fff;

    &-body {
      padding: 24px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      &-item {
        width: 30%;
        color: #4992a0;
        text-align: center;
      }

      &-item:hover {
        background-color: #74f3aa5c;
        border-radius: 5px;
      }
    }
  }
}

</style>