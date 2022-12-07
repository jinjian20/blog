<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-11-27 12:59:57
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-07 12:08:09
 * @FilePath: /blog/client/src/views/dashboard/Details.vue
 * @Description: 文章详情页
-->
<template>
  <BgHeader :title="addArticle.title"/>
  <div class="details">
    <div class="details-content">
      <div class="details-content-word" v-html="addArticle.content"></div>
   </div>
  </div>
</template>

<script setup lang="ts">
import { detailBlog } from '../api/blog'
import BgHeader from '@/components/BgHeader.vue'

const route = useRoute()
const id = route.query.id
let addArticle = reactive({
  id: '',
  categoryId: '',
  title: '',
  content: '',
})

onMounted(() => {
  getDetailBlog(id)
}) 

// 查详情
const getDetailBlog = async(id: any) => {
  try {
    const res = await detailBlog({id})
    addArticle.title = res.data[0].title
    addArticle.content = res.data[0].content
  } catch(err: any) {
    // msg.error(err.msg)
  }
}
</script>
<style scoped lang="scss">
.details {
  padding: 16px 20%;
  
  &-content {
    padding: 20px;
    background: #fff;
    border: 1px solid #fff;
    border-radius: 8px;
    box-shadow: 0 3px 8px 6px #07111b0d;

    &-title {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
    }
  }
}
</style>