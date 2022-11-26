<!--
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-11-08 17:25:37
 * @LastEditors: jinjian jian.jin3@gientech.com
 * @LastEditTime: 2022-11-16 15:09:43
 * @FilePath: /blog/client/src/views/dashboard/Category.vue
 * @Description: 分类管理
-->
<template>
  <div>
    <n-space>
      <n-button
        strong
        secondary
        type="success"
        @click="showModal = true">
        新增
      </n-button>
    </n-space>
    <n-data-table
      :single-line="false"
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :bordered="false"
    />

    <n-modal v-model:show="showModal" preset="dialog" title="Dialog">
    <template #header>
      <div>添加</div>
    </template>
    <div>
      <n-input v-model:value="category" type="text" placeholder="基本的 Input" />
    </div>
    <template #action>
      <div>
        <n-button
          type="primary"
          @click="handleSubmit">
          提交
        </n-button>
      </div>
    </template>
  </n-modal>
  </div>
</template>

<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import { NButton, NGradientText, NTooltip } from 'naive-ui'
import { getCategory, addCategory, editCategory, deleteCategory } from '../../api/category'

// 提示
const msg = inject<any>('message')
const  dialog = inject<any>('dialog')
// 列表数据
let data = ref<Category>()
// 新增-模态框
let showModal = ref<boolean>(false)
// 输入框
let category = ref('')
// 类型-新增/编辑
let type = ref<string>()
// 编辑id
let id = ref<string>()
// 分页
const pagination = false as const

const renderTooltip = (trigger: any, content: string) => {
  return h(NTooltip, null, {
    trigger: () => trigger,
    default: () => content
  })
}
// 初始化列表
const columns = ref<DataTableColumns<Category>>([{
    key: 'id',
    align: 'center',
    title () {
      return renderTooltip(
        h(
          NGradientText,
          {
            type: 'warning'
          },
          { default: () => '编号' }
        ),
        'Tooltip Content'
      )
    }
  }, {
    key: 'name',
    align: 'center',
    title () {
      return renderTooltip(
        h(
          NGradientText,
          {
            type: 'warning'
          },
          { default: () => '名称' }
        ),
        'Tooltip Content'
      )
    }
  }, {
    key: 'actions',
    align: 'center',
    title () {
      return renderTooltip(
        h(
          NGradientText,
          {
            type: 'warning'
          },
          { default: () => '操作' }
        ),
        'Tooltip Content'
      )
    },
    render (row) {
      return [
      h(
        NButton,
        {
          size: 'small',
          onClick: () => handleEdit(row)
        },
        { default: () => '修改' },
      ),
      h(
        NButton,
        {
          size: "small",
          style: {
            marginLeft: "20px",
          },
          onClick: () => deleteItem(row),
        },
        { default: () => '删除'}
      ),
      ]
    }
  }
])

// 添加-提交
const handleSubmit = () => {
  type.value === 'edit' ? editUpdate() : addUpdate()
}

interface Category {
  id?: string
  name: string
}

// 新增-交互
const addUpdate = async() => {
  const params: Category = {
    name: category.value
  }
  try {
    const res = await addCategory(params)
    msg.success(res.msg)
    showModal.value = false
    getCategoryList()

  } catch(error: any) {
    msg.error(error.msg)
  }
}

// 修改
const handleEdit = (row: Category) => {
  showModal.value = true
  category.value = row.name
  type.value = 'edit'
  id.value = row.id
}
// 修改-交互
const editUpdate = async () => {
  const params: Category = {
    name: category.value,
    id: id.value
  }
  try {
    const res = await editCategory(params)
    msg.success(res.msg)
    showModal.value = false
    getCategoryList()
  } catch (error: any) {
    msg.error(error.msg)
  }
}

// 删除
const deleteItem = (row: Category) => {
  const id: string = row.id || ''
  try {
    dialog.error({
      title: '删除',
      content: '确定删除该分类？',
      positiveText: '确定',
      negativeText: '不确定',
      maskClosable: false,
      onPositiveClick: async () => {
        const res = await deleteCategory({id})
        msg.success(res.msg)
        showModal.value = false
        getCategoryList()
      },
    })
  } catch(error: any) {
    msg.error(error.msg)
  }
}

onMounted(() => {
  // 获取列表
  getCategoryList()
})

// 获取列表
const getCategoryList = async () => {
  try {
    const res = await getCategory()
    data.value = res.data
  } catch(error) {
    msg.error('获取失败')
  }
}
</script>
<style scoped lang="scss">
</style>