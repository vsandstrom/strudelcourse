import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()]
});

module.exports = {
  root: 'src',
  build: {
    outDir: '../dist'
  }
}

