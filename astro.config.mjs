import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	// site: 'https://epicshi.github.io',
	base: '/docs',
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
						{ label: 'Mobile Application', slug: 'software/mobile' },
						{ label: 'Backend API', slug: 'software/backend' },
						{ label: 'Disease Detection Model', slug: 'software/disease' },
						{ label: 'Time Series Model', slug: 'software/timeseries' },
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