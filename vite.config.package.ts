import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  root: `${process.cwd()}/src`, // <--- defaults to process.cwd(). where the index.html is located.
  plugins: [react(), libInjectCss()],
  server: {
    open: true,
    port: 3000,
    strictPort: true,
  },
  build: {
    outDir: resolve(__dirname, 'dist'), // <--- defaults to `dist` under src, which is wrong.
    emptyOutDir: false, // <--- defaults to `true`
    copyPublicDir: false,
    minify: 'esbuild',
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'TableUI',
      formats: ['es'],

      fileName: (_format) => 'index.js', // <--- format: 'es' | 'umd' | 'cjs'
    },
    rollupOptions: {
      input: './lib/index.ts',
      external: ['react', '@tanstack/react-table', 'clsx', 'react/jsx-runtime'],
      output: {
        assetFileNames: '[name][extname]', // <--- css files
        inlineDynamicImports: true, // <--- prevent code splitting
      },
    },
  },
});
