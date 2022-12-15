import type { TTest } from '../testMockFetch';

import { rest } from 'msw';

export const mockedTest: TTest = {
	key: 'Great success!',
};

export const handlers = [
	rest.get('/api/test', (req, res, ctx) => {
		return res(ctx.json(mockedTest));
	}),
];
