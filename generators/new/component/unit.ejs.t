---
to: "src/components/<%= type %>/<%= name %>/index.test.tsx"
---
import { render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { checkA11y } from 'test/test-utils';
import <%= h.inflection.camelize(name) %>, { T<%= h.inflection.camelize(name) %> } from './'

describe('~/components/<%= type %>/<%= name %>', () => {
  afterEach(() => {
		vi.clearAllMocks();
		cleanup();
	});

	test('passes accessibility checks', async () => {
		const { container } = setupTest();
		await checkA11y(container);
	});

	test('should render', async () => {
		setupTest();
		const btn = screen.getByText('Component');
		expect(btn).toBeTruthy();
	});
})

type TestOverrides = {
	props?: Partial<T<%= h.inflection.camelize(name) %>>;
};

const getDefaultProps = (overrides: Partial<T<%= h.inflection.camelize(name) %>> = {}): T<%= h.inflection.camelize(name) %> => ({
	...overrides,
});

const setupTest = (overrides: TestOverrides = {}) => {
	const props = getDefaultProps(overrides.props);
	const utils = render(
    <<%= h.inflection.camelize(name) %> {...props}>{props.children ?? 'Component'}</<%= h.inflection.camelize(name) %>>
	);
	return {
		...utils,
		props,
	};
};