const path = require('path');

module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		'storybook-addon-performance/register',
		{
			name: '@storybook/addon-postcss',
			options: {
				cssLoaderOptions: {
					// When you have splitted your css over multiple files
					// and use @import('./other-styles.css')
					importLoaders: 1,
				},
				postcssLoaderOptions: {
					// eslint-disable-next-line global-require
					implementation: require('postcss'),
				},
			},
		},
	],
	core: {
		builder: 'webpack5',
	},
	webpackFinal: async (config) => {
		config.resolve.alias['~'] = path.resolve(__dirname, '../src');

		// remove the existing css rule
		config.module.rules = config.module.rules.filter(
			(f) => f.test.toString() !== '/\\.css$/',
		);

		// Prevent webpack from using Storybook CSS rules to process CSS modules
		config.module.rules.find(
			(rule) => rule.test.toString() === '/\\.css$/',
		).exclude = /\.module\.css$/;

		// Tell webpack what to do with CSS modules
		config.module.rules.push({
			test: /\.module\.css$/,
			include: path.resolve(__dirname, '../src'),
			use: [
				{
					loader: 'style-loader',
				},
				{
					loader: 'css-loader',
					options: {
						importLoaders: 1,
						modules: {
							namedExport: true,
						},
					},
				},
			],
		});

		// Needed to allow finding of imports inside of components
		config.resolve.modules = [
			...(config.resolve.modules || []),
			path.resolve('./'),
		];

		// return the altered config
		return config;
	},
};
