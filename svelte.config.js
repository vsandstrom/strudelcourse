import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			strict: true,
			fallback: '404.html',
			pages: 'build'
		}),
		prerender: {
			entries: ['*', '/', '/note', '/sound', '/stack', '/ping_pong', '/samples', '/tutorial'],
			// entries: ['*', '/'],
      handleMissingId: "ignore"
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/strudelcourse/build' : ''
		}
	}
};

export default config;
