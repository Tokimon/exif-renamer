import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

// https://vitejs.dev/config/
/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [svelte({ preprocess: vitePreprocess() })],
  resolve: {
    alias: {
      '~': resolve('src'),
    },
  },
  build: {
    outDir: resolve('frontend'),
  },
};
