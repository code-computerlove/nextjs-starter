import type { AppProps } from 'next/app';

import React from 'react';
import dynamic from 'next/dynamic';
import reportAccessibility from '../utils/reportAccessibility';

import '../styles/globals.css';

const MockApi = dynamic(() => import('./mock-api'));

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<MockApi />
			<main id="main-content" className="main">
				<Component {...pageProps} />
			</main>
		</>
	);
};

reportAccessibility(React);

export default MyApp;
