import { vi, afterEach, afterAll, beforeAll } from 'vitest';
import { server } from 'src/api/mocks/server';

if (!global.fetch) {
	global.fetch = vi.fn();
}

vi.spyOn(console, 'error').mockImplementation(() => null);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
