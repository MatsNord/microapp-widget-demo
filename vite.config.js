// widget/vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@microapp': path.resolve(__dirname, 'microapp/src'),
    },
  },
  server: {
    port: 5174
  }
});