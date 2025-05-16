import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';

/**
 * Vite doesn't support rollup.output.file, so we need to use rollup directly.
 */
export default defineConfig({
  input: './lib/index.ts',
  output: {
    file: './dist/index.d.ts',
    format: 'es',
  },
  plugins: [dts()],
  external: ['react', '@tanstack/react-table', 'clsx', 'react/jsx-runtime'],
});
