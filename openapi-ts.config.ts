import { defaultPlugins } from '@hey-api/openapi-ts';

export default {
	input: 'http://127.0.0.1:8000/api-docs/openapi.json',
	output: {
		format: 'prettier',
		lint: 'eslint',
		path: './src/client'
	},
	plugins: [
		...defaultPlugins,
		'@hey-api/client-fetch',
		'@tanstack/svelte-query',
		'@hey-api/schemas',
		'@hey-api/sdk',
		'zod',
		{
			name: '@hey-api/typescript',
			enums: 'javascript'
		},
		{
			name: '@hey-api/sdk',
			validator: true
		}
	]
};
