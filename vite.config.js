const path = require('path')
const { defineConfig } = require('vite')
import vue from '@vitejs/plugin-vue'

module.exports = defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'MyLib',
      fileName: (format) => `cookieConsent_mv.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})

// import { fileURLToPath, URL } from 'url'
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })
