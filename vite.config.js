import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Spring 서버 주소
        changeOrigin: true,
      },
    },
  },
  build: {
    // outDir: '../../study_project_2/EYL_Backend/src/main/webapp/resources',
    outDir: '../EYL_Backend/src/main/webapp/resources',
    emptyOutDir: true, // 이전 빌드 파일 비우고 새로 불러옴
  },
});
