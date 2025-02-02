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
					label: 'Getting Started', slug: 'intro'
				},
				{
					label: 'Software',
					items: [
						{
							label: 'Mobile Application',
							items: [
								{ label: 'About the App', slug: 'software/mobile' },
								{
									label: 'Sections', items: [
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
							label: 'Backend API', slug: 'software/backend'
							// items: [
							// 	{ label: 'Introduction', slug: 'software/backend' },
							// 	{
							// 		label: 'Sections', items: [
							// 			{ label: 'Home Page', slug: 'software/mobile/home' },
							// 			{ label: 'Dashboard', slug: 'software/mobile/dashboard' },
							// 			{ label: 'News', slug: 'software/mobile/news' },
							// 			{ label: 'Schemes', slug: 'software/mobile/schemes' },
							// 			{ label: 'About', slug: 'software/mobile/about' },
							// 		]
							// 	}
							// ]
						},
					],
				},
				{
					label: 'Machine Learning',
					items: [
						{ label: 'Disease Detection Model', slug: 'ml/disease' },
						{ label: 'Time Series Model', slug: 'ml/timeseries' },
					],
				},
				{
					label: 'Hardware',
					items: [
						{ label: 'The Node', slug: 'hardware/node' },
					],
				}
			],
		}),
	],
});