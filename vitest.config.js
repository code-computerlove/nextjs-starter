/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'~': path.resolve(__dirname, './src'),
		},
	},
	test: {
		environment: 'jsdom',
		setupFiles: ['test/jest-setup.ts'],
		coverage: {
			reportsDirectory: 'coverage',
			exclude: ['src/generated/**'],
		},
		testTimeout: 10000,
	},
	build: {
		sourcemap: true,
	},
});
