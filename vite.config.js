// widget/vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@microapp': path.resolve(__dirname, 'microapp/src'),
      // ...other aliases if present
    },
  },
  server: {
    port: 5174
  }
});