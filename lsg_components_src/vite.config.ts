import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tssVitePlugin } from './vite-plugin-tss';
import { createHash } from 'crypto';

// Get LSG version from environment or use 'dev' as fallback
const lsgVersion = process.env.LSG_VERSION || 'dev';
const versionHash = createHash('md5').update(lsgVersion).digest('hex').substring(0, 6);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // Process *.styles.ts files BEFORE React plugin
    tssVitePlugin({
      css: false, // Don't output CSS files in dev mode
      logCssErrors: false, // Set to true for debugging
      styleInject: true, // Auto-inject styles
      styleInjectHot: true, // Enable HMR for styles
      version: lsgVersion,
    }),
    
    // React plugin for JSX/TSX
    react(),
  ],

  define: {
    // Make LSG_VERSION available to the app
    // Used by src/config/prefix.ts
    'import.meta.env.VITE_LSG_VERSION': JSON.stringify(lsgVersion),
    'import.meta.env.VITE_LSG_VERSION_HASH': JSON.stringify(versionHash),
  },

  resolve: {
    alias: {
      // Add aliases if needed
      '@lsg/components': '/src',
    },
  },

  server: {
    // Storybook will set its own port
    port: 6006,
    open: false,
  },

  build: {
    // Preserve module structure for better debugging
    sourcemap: true,
    
    // Target modern browsers
    target: 'es2015',
  },
});
