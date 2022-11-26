<!--
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-11-08 17:24:23
 * @LastEditors: jinjian jian.jin3@gientech.com
 * @LastEditTime: 2022-11-22 20:42:04
 * @FilePath: /blog/client/src/views/dashboard/Article.vue
 * @Description: 文章管理
-->
<template>
  <div>
    <n-tabs v-model:value="tabValue" justify-content="space-evenly" type="line">
      <n-tab-pane name="list" tab="文章列表">
        <div v-for="item in blogList" class="card">
          <n-card :title="item.title">
            <span class="card-content">{{ item.content }}</span>
            <template #footer>
              <n-space align="center">
                <div>发布时间：{{ item.create_time }}</div>
                <n-button type="success" size="small" quaternary @click="handleUpdate(item)">修改</n-button>
                <n-button type="error" size="small" quaternary @click="handeDelete(item)">删除</n-button>
              </n-space>
            </template>
          </n-card>
        </div>
        <n-space>
          <n-pagination
            v-model:page="pageInfo.page"
            v-model:page-size="pageInfo.size"
            :item-count="count"
            :page-sizes="[10, 20, 30, 40]"
            :onUpdatePageSize="handleChange"
            :onUpdatePage="handleChange"
            show-size-picker
          />
        </n-space>
      </n-tab-pane>
      <n-tab-pane name="add" tab="添加文章">
        <n-form
          ref="formRef"
          :label-width="80"
          :model="addArticle"
        >
          <n-form-item label="标题" path="title">
            <n-input v-model:value="addArticle.title" placeholder="请输入" />
          </n-form-item>
          <n-form-item label="分类" path="">
            <n-select
              v-model:value="addArticle.categoryId"
              :options="categoryOptions" />
          </n-form-item>
          <n-form-item label="内容" path="content">
            <rich-text-editor v-model="addArticle.content" />
          </n-form-item>
          <n-form-item>
            <n-button @click="handleSubmit">提交</n-button>
          </n-form-item>
        </n-form>
      </n-tab-pane>
    </n-tabs>
    {{ addArticle.content }}
  </div>
</template>

<script setup lang="ts">
import RichTextEditor from '../../components/RichTextEditor.vue'
import { getCategory } from '../../api/category'
import { addBlog, getBlog, detailBlog, deleteBlog, updateBlog } from '../../api/blog'

type Blog = {
  id?: string
  title: string
  categoryId: string
  content: string
}

type Page = {
  page: number
  size: number
}

const msg = inject<any>('message')
let addArticle = reactive({
  id: '',
  categoryId: '',
  title: '',
  content: '',
})
const pageInfo = reactive({
  page: 1,
  size: 10,
})

let count = ref<number>()
let tabValue = ref('list')
let categoryOptions = ref([])
let blogList = ref()
// 区分新增和编辑
let type = ref('add')

onMounted(() => {
  getCatefory()
  getBlogList(pageInfo)
})

// 提交
const handleSubmit = async() => {
  const params: Blog = { ...addArticle }
  try {
    const res = await type.value === 'edit' ? updateBlog(params) : addBlog(params)
    // msg.success(res.msg)
    tabValue.value = 'list'
    getBlogList(pageInfo)
  } catch (err: any) {
    msg.error(err.msg)
  }
}

// 查详情
const getDetailBlog = async(id: string) => {
  try {
    const res = await detailBlog({id})
    addArticle.title = res.data[0].title 
    addArticle.content = res.data[0].content 
    addArticle.id = res.data[0].id
    addArticle.categoryId = res.data[0].category_id
    tabValue.value = 'add'
  } catch(err: any) {
    msg.error(err.msg)
  }
}

// 修改
const handleUpdate = async(blog: Blog) => {
  type.value = 'edit'
  const id = blog.id || ''
  getDetailBlog(id)
}

// 删除
const handeDelete = async(blog: Blog) => {
  const id = blog.id || ''
  try {
    const res = await deleteBlog({id})
    msg.success(res.msg)
    getBlogList(pageInfo)
  } catch(err: any) {
    msg.error(err.msg)
  }
}

// 分页
const handleChange = (pageSize: number, page: number) => {
  pageInfo.size = pageSize
  pageInfo.page = page
  getBlogList(pageInfo)
}

// 获取日志列表
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
.card {
  margin-bottom: 10px;

  &-content {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 800px;
  }
}
</style>