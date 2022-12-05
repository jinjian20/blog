<!--
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-11-22 20:42:20
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-05 16:01:27
 * @FilePath: /blog/client/src/views/HomePage.vue
 * @Description: 首页
-->
<template>
  <div class="home">
    <div class="home-cover">
      <Header/>
      <div class="home-cover-word">
        <h1>一斤斤 BLOG</h1>
        <h2>欢迎光临</h2>
      </div>
      <span class="action">
        <n-icon :size="30">
          <a href="#down">
            <ChevronDownOutline />	
          </a>
        </n-icon>
      </span>
    </div>
    <div class="home-cantainer" id="down">
      <div v-for="item in blogList" class="home-cantainer-card">
          <p class="home-cantainer-card-title" @click="handleToDetail(item.id)">{{ item.title }}</p>
          <div class="home-cantainer-card-wrap">
            <span class="home-cantainer-card-meta">
              <n-icon :size="12">
                <CalendarOutline />	
              </n-icon>
              发表于{{ item.create_time }}
            </span>
            <span class="home-cantainer-card-meta-divider">|</span>
            <span class="home-cantainer-card-meta">
              <n-icon :size="12">
                <FileTrayFullOutline />	
              </n-icon>
              分类{{ item.category }}
            </span>
          </div>
          <div class="home-cantainer-card-summary">
            {{ item.content }}
        </div>
      </div>
      <div class="home-cantainer-page">
        <n-pagination
            v-model:page="pageInfo.page"
            v-model:page-size="pageInfo.size"
            :item-count="count"
            :page-sizes="[10, 20, 30, 40]"
            :onUpdatePageSize="handleChange"
            :onUpdatePage="handleChange"
            show-size-picker
          />
      </div>
    </div>
    <!-- <div class="home-footer">
      footer
    </div> -->
  </div>
</template>

<script setup lang="ts">
import {
  ChevronDownOutline,
  CalendarOutline,
  FileTrayFullOutline,
 } from '@vicons/ionicons5'
import Header from '../components/Header.vue'
import { getCategory } from '../api/category'
import { getBlog } from '../api/blog'

type Page = {
  page: number
  size: number
}

const router = useRouter()
let blogList = ref()
let count = ref<number>()
let categoryOptions = ref([])
const msg = inject<any>('message')
const pageInfo = reactive({
  page: 1,
  size: 10,
})

onMounted(() => {
  getBlogList(pageInfo)
})

// 跳到文章详情
const handleToDetail = (id: string) => {
  router.push({
    path: '/details',
    query: {id}
  })
}

// 分页
const handleChange = (pageSize: number, page: number) => {
  pageInfo.size = pageSize
  pageInfo.page = page
  getBlogList(pageInfo)
}

// 获取blog列表
const getBlogList = async(query: Page) => {
  try {
    const res = await getBlog(query)
    blogList.value = res.data.rows
    count.value = res.data.count
  } catch (err: any) {
    msg.error(err.msg)
  } 
}

// 获取分类
const getCatefory = async() => {
  const res = await getCategory()
  categoryOptions.value = res.data.map((el: any) => {
    return {
      label: el.name,
      value: el.id
    }
  })
}

</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  background-color: #f3f6f7;

  &-cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeUpInCover-9f6b8b4b 1s;
    padding: 10px;
    background-image: url(../assets/img/home.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;

    &-word {
      font-family: Kanit;
      color: #fff;
      margin: 0;
      text-shadow: 0 3px 6px rgb(0 0 0 / 30%);
    }
  }

  &-cantainer {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 15%;
    margin: calc(100vh - 10px) auto auto 0px;

    &-card {
      width: 100%;
      height: 140px;
      margin-top: 20px;
      text-align: center;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 3px 8px 6px #07111b0d;

      &-title {
        color: #333;
        font-size: 24px;
        transition: color .4s;
        overflow: hidden;
        line-height: 1.5;
      }

      &-wrap {
        display: flex;
        justify-content: center;
        margin: 9px 0;
      }

      &-summary {
        font-size: 14px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        line-height: 2;
        -webkit-line-clamp: 2;
      }

      &-meta {
        font-size: 12px;
        color: #333;
        box-sizing: border-box;
        line-height: 24px;
        overflow: hidden;
        -webkit-line-clamp: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;

        &-divider {
          color: #858585;
          margin: 3px 8px;
          font-size: 12px;
        }
      }
    }

    &-page {
      // position: absolute;
      // bottom: 20px;
      // left: 40%;
    }
  }

  &-footer {
    position: relative;
    display: flex;
    justify-content: space-between;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    line-height: 2;
    padding: 24px;
    color: #eee;
    font-size: 18px;
    text-align: center;
    background-color: aqua;
  }
}

.action {
  position: absolute;
  bottom: 6%;
  cursor: pointer;
  transition: all 1s;
  animation: jump .5s ease-in-out infinite alternate;

  a {
    color: #fff9;
  }
}

@keyframes jump {
  from { bottom: 5%; }
  to { bottom: 6%; }
}

a:hover {
  color: #23a6d5;
}
</style>