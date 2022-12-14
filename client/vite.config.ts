/*
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-11-01 20:44:18
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-07 21:20:27
 * @FilePath: /blog/client/vite.config.ts
 * @Description: 配置
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
// gzip压缩
import viteCompression from 'vite-plugin-compression'
// 压缩图片
import viteImagemin from "vite-plugin-imagemin"
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default (({ mode }) => {
  return defineConfig ({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    optimizeDeps: {
      include: ['@kangc/v-md-editor/lib/theme/vuepress.js'],
    },
    plugins: [
      vue(),
      viteCompression(),
      viteImagemin(),
      AutoImport({ 
        imports:['vue','vue-router', 'pinia'],
        dts:"src/auto-import.d.ts"
      }),
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ],
    server:{
      host: '0.0.0.0',
      port: 80,
      strictPort: true, // 端口被占用直接退出
      https: false,
      open: true,// 在开发服务器启动时自动在浏览器中打开应用程序
      proxy: {
        '^/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      },
    },
  })
})
