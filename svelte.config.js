import adapter from '@sveltejs/adapter-static';
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
	kit: {
		adapter: adapter()
	},
	prerender: {
		entries: [
			'*',
		]
	}
};

export default config;
