import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import autoprefixer from 'autoprefixer';

import { assetFileNamer, chunkSplitter } from './conf';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  root: '.',
  base: '/',
  publicDir: 'public',

  define: {
    global: 'window',
  },

  cacheDir: 'node_modules/.vite',

  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
    preprocessorOptions: {
      scss: {
        includePaths: ['src/sass'],
      },
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '!': path.resolve(__dirname, './public'),
    },
  },

  server: {
    port: 9999,
    fs: {
      allow: [__dirname],
    },
  },

  preview: {
    port: 8888,
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2024',
    esbuild: {
      legalComments: 'none',
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name]/[hash].js',
        chunkFileNames: 'js/[name]/[hash].js',
        assetFileNames: ({ name }) => assetFileNamer({ name }),
        manualChunks: (id) => chunkSplitter(id),
      },
    },
    chunkSizeWarningLimit: 2000,
  },

  envDir: '.',
  envPrefix: 'VITE_',

  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'e2e/*'],
  },
});
