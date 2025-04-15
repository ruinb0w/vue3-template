import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "node:path";
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), Components({
    resolvers: [VantResolver()]
  })],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: '0.0.0.0',
  },
  preview: {
    host: '0.0.0.0',
  }
})
