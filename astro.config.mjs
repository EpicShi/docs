import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://epicshi.github.io',
	base: '/docs',
	integrations: [
		starlight({
			title: 'Drishti Docs',
			social: {
				github: 'https://github.com/epicshi',
			},
			sidebar: [
				{
					label: 'Getting Started', slug: 'intro'
				},
				{
					label: 'Software Development',
					items: [
						{
							label: 'Mobile Application',
							items: [
								{ label: 'Overview', slug: 'software/mobile' },
								{
									label: 'App Features', items: [
										{ label: 'Home Page', slug: 'software/mobile/home' },
										{ label: 'Dashboard', slug: 'software/mobile/dashboard' },
										{ label: 'News', slug: 'software/mobile/news' },
										{ label: 'Schemes', slug: 'software/mobile/schemes' },
										{ label: 'About', slug: 'software/mobile/about' },
									]
								}
							]
						},
						{
							label: 'Backend Services', items: [
								{ label: 'Overview', slug: 'software/backend' },
							]
						},
					],
				},
				{
					label: 'Machine Learning',
					items: [
						{ label: 'Disease Prediction', slug: 'ml/disease' },
						{ label: 'Time Forecasting', slug: 'ml/timeseries' },
					],
				},
				{
					label: 'Hardware & IoT',
					items: [
						{
							label: 'Sensor Node',
							items: [
								{ label: 'Overview', slug: 'hardware/node/description' },
								{ label: '3D CAD Model', slug: 'hardware/node/cad' }
							]
						},
					],
				}
			],
		}),
	],
});