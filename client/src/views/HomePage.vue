<!--
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-11-22 20:42:20
 * @LastEditors: jinjian jian.jin3@gientech.com
 * @LastEditTime: 2023-08-31 16:26:41
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
          <div @click="handleScrollTo">
            <ChevronDownOutline />	
          </div>
        </n-icon>
      </span>
    </div>
    <div class="home-cantainer" id="down">
      <div v-for="item in blogList" class="home-cantainer-card" @click="handleToDetail(item.id)">
          <n-gradient-text type="warning" :size="32">{{ item.title }}</n-gradient-text>
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
          <div class="home-cantainer-card-summary" v-html="item.content"></div>
        </div>
      </div>
    </div>
    <p class="home-footer" @click="handlerRouter">
      京ICP备2022034121号-1
    </p>
</template>

<script setup lang="ts">
import {
  ChevronDownOutline,
  CalendarOutline,
  FileTrayFullOutline,
 } from '@vicons/ionicons5'
import Header from '../components/Header.vue'
import { getBlog } from '../api/blog'

type Page = {
  page: number
  size: number
}

const router = useRouter()
let blogList = ref()
let count = ref<number>()
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

// 滚动到指定位置
const handleScrollTo = () => {
  const PageId = document.querySelector('#down') as HTMLElement
  window.scrollTo({
    'top': PageId.offsetTop,
    'behavior': 'smooth'
  })
}

// 跳转到备案中心
const handlerRouter = () => {
  window.open('https://beian.miit.gov.cn/#/Integrated/index')
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
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;

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
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 15%;
    // margin: calc(100vh - 10px) auto auto 0px;
    margin: calc(100vh + 20px) auto auto 0px;
    overflow: auto;

    &-card {
      width: 100%;
      // margin-top: 20px;
      margin-bottom: 20px;
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
        display: flex;
        justify-content: center;

        :only-child {
          font-size: 14px;
          color: rgb(66, 144, 247);
        }
      }

      &-meta {
        font-size: 12px;
        color: #333;
        display: flex;
        align-items: center;

        &-divider {
          color: #858585;
          margin: 3px 8px;
          font-size: 12px;
        }
      }
    }

    &-page {
      position: absolute;
      bottom: 10px;
    }
  }

  &-footer {
    position: relative;
    left: 0;
    right: 0;
    bottom: 0;
    // width: 100%;
    cursor: pointer;
    padding: 10px;
    text-align: center;
    background-color: #b9dff9c9;
  }
}

.action {
  position: absolute;
  bottom: 6%;
  cursor: pointer;
  transition: all 1s;
  animation: jump .5s ease-in-out infinite alternate;
  color: #fff9;
}

@keyframes jump {
  from { bottom: 5%; }
  to { bottom: 6%; }
}

// a:hover {
//   color: #23a6d5;
// }
</style>