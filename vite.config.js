import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import paths from './config/paths';

const APP_DIR = paths.appSrc;

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/manifest.json',
          dest: '.',
        },
        {
          src: "src/background/background.js",
          dest: "."
        },
        {
          src: "src/content/content.js",
          dest: "."
        }
      ],
    }),
  ],
  resolve: {
    alias: {
      Assets: `${APP_DIR}/assets`,
      Components: `${APP_DIR}/components`,
      // Containers: `${APP_DIR}/containers`,
      Style: `${APP_DIR}/styles`,
      Utils: `${APP_DIR}/utils`,
    },
  },
  build: {
    minify: "terser",
    assetsDir: 'assets',
    // rollupOptions: {
    //   output: {
    //     assetFileNames: 'fonts/Ubuntu/[name].[hash][extname]',
    //   },
    // },
  },
})
