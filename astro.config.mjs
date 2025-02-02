import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Drishti Docs',
			social: {
				github: 'https://github.com/epicshi',
			},
			sidebar: [
				{
					label: 'Software',
					items: [
						{ label: 'Mobile Application', slug: 'docs/software/mobile' },
						{ label: 'Backend API', slug: 'docs/software/backend' },
						{ label: 'Disease Detection Model', slug: 'docs/software/disease' },
						{ label: 'Time Series Model', slug: 'docs/software/timeseries' },
					],
				},
				{
					label: 'Hardware',
					items: [
						{ label: 'Node', slug: 'hardware/node' },
					],
				}
			],
		}),
	],
});