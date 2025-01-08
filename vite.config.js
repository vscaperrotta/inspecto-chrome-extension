import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import paths from './config/paths'

const APP_DIR = paths.appSrc

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/icons',
          dest: ''
        }
        // {
        //   src: 'src/content',
        //   dest: '.'
        // },
      ],
    }),
  ],
  resolve: {
    alias: {
      Assets: `${APP_DIR}/assets`,
      Components: `${APP_DIR}/components`,
      Style: `${APP_DIR}/styles`,
      Utils: `${APP_DIR}/utils`,
    },
  },
  build: {
    minify: 'terser',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        index: 'index.html',
        content: 'src/content/content.js',
        // background: 'src/background/background.js',
      },
      output: {
        entryFileNames: '[name].js'
      }
    }
  }
})
