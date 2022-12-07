<!--
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-11-15 19:57:48
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-07 21:57:58
 * @FilePath: /blog/client/src/components/RichEditor.vue
 * @Description: 富文本组件
-->
<template>
  <div>
    <Toolbar
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
      style="border-bottom: 1px solid #ccc"
    />
    <Editor
      :defaultConfig="editorConfig"
      :mode="mode"
      v-model="valueHtml"
      style="height: 400px; overflow-y: hidden"
      @onCreated="handleCreated"
      @onChange="handleChange"
    />
  </div>
</template>

<script setup lang="ts">
import { Boot } from '@wangeditor/editor'
import markdownModule from '@wangeditor/plugin-md'
import '@wangeditor/editor/dist/css/style.css'
import { IEditorConfig } from '@wangeditor/editor'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

Boot.registerModule(markdownModule)

// 编辑器实例
const editorRef = shallowRef()
const toolbarConfig = {}
const editorConfig: Partial<IEditorConfig> = {
  MENU_CONF: {
    'uploadImage': {
      server: 'http://localhost:8080/upload/rich_editor_upload',
      base64LimitSize: 5 * 1024
    },
    'insertImage': {
      parseImageSrc: (src: string) => {
        if (src.indexOf('http') < 0) {
          return `http://localhost:8080${src}`
        }
        return src
      }
    }
  },
  
  placeholder: '请输入内容...'
}

const mode = ref('default')
// 内容 HTML
const valueHtml = ref<string>()
let initFinshed = false

onMounted(() => {
  nextTick(() => {
    valueHtml.value = props.modelValue
    initFinshed = true
  })
})

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: String,
    defalult: ''
  }
})

// 编辑器回调函数
const handleCreated = (editor: any) => {
  editorRef.value = editor
}

// 输入监听事件
const handleChange = () => {
  if (initFinshed) {
    emit('update:modelValue', valueHtml.value)
  }
}
</script>
<style scoped lang="scss">
</style>