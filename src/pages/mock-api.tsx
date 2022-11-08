import { useEffect } from 'react';

const MockApi: React.FC = () => {
	useEffect(() => {
		const { worker } = require('src/api/mocks/browser');
		worker.start({ onUnhandledRequest: 'bypass' });
	}, []);
	return null;
};

export default MockApi;
