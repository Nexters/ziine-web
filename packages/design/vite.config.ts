import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.json',
    }),
    viteStaticCopy({
      targets: [{ src: 'src/styled-system/**/*.d.ts', dest: './' }],
      structured: true,
    }),
  ],
  optimizeDeps: {
    include: ['storybook-addon-essential'],
    esbuildOptions: {
      target: 'es2020',
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
  },
});
