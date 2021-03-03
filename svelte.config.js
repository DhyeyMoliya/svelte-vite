const sveltePreprocess = require('svelte-preprocess');
const esbuild = require('esbuild');

module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		typescript({ content }) {
			const { code, map } = esbuild.transformSync(content, {
				loader: 'ts',
			});
			return { code, map };
		},
	}),
};
