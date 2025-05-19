import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "node:path";
import Components from 'unplugin-vue-components/vite';
import { VantResolver, ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver(), ElementPlusResolver(),],
    }),
    process.env.VISUALIZE === 'true' && visualizer({
      open: true,
      filename: 'stats.html',
      gzipSize: true,
      brotliSize: true,
    })
  ],
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
