import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@lsg/components': path.resolve(__dirname, './lsg_components_src/dist/esm/index.js'),
      '@lsg/icons': path.resolve(__dirname, './src/mockIcons.ts'),
      '@lsg/ssr': path.resolve(__dirname, './src/mockSsr.ts')
    }
  }
})
