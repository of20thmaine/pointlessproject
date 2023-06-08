import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		preprocess({ typescript: true }), 
		mdsvex(mdsvexConfig),
	],
	adapter: adapter({
		// See below for an explanation of these options
		routes: {
			include: ['/*'],
			exclude: ['<all>']
		}
	})
};

export default config;
