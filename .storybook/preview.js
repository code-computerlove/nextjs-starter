import '!style-loader!css-loader!postcss-loader!../src/styles/globals.css';
import * as NextImage from 'next/image';
import * as NextLink from 'next/link';

import { addDecorator } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';

addDecorator(withPerformance);

// initialise mocked API
// check for global process because this also runs during the build process
if (typeof global.process === 'undefined') {
	const { worker } = require('../src/api/mocks/browser');
	worker.start({ onUnhandledRequest: 'bypass' });
}

const OriginalLink = NextLink.default;

Object.defineProperty(NextLink, 'default', {
	configurable: true,
	value: (props) => <OriginalLink {...props}>{props.children}</OriginalLink>,
});

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
	configurable: true,
	value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	options: {
		storySort: {
			order: ['atoms', 'molecules', 'organisms', 'layout'],
		},
	},
};
