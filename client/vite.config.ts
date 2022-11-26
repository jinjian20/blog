/*
 * @Author: jinjian jian.jin3@gientech.com
 * @Date: 2022-11-01 20:44:18
 * @LastEditors: jinjian jian.jin3@gientech.com
 * @LastEditTime: 2022-11-09 22:09:30
 * @FilePath: /blog/client/vite.config.ts
 * @Description: 配置
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { loadEnv } from 'vite'

export default (({ mode }) => {
  return defineConfig ({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      vue(),
      AutoImport({ 
        imports:['vue'],
        dts:"src/auto-import.d.ts"
      }),
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ],
    server:{
      host: '127.0.0.1',
      port: 3000,
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
