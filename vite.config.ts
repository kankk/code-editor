import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import monacoEdtorPlugin from 'vite-plugin-monaco-editor';

import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '~type': path.join(__dirname, 'src/types'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@pages': path.join(__dirname, 'src/pages'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@components': path.join(__dirname, 'src/components'),
    },
  },
  plugins: [
    vue(),
    monacoEdtorPlugin(),
  ],
});
