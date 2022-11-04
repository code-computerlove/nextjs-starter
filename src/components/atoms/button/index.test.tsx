import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { checkPa11y } from 'test/test-utils';

import { Button, TButton } from './index';

describe('atoms/button', () => {
	afterEach(() => {
		vi.clearAllMocks();
		cleanup();
	});

	test('passes accessibility checks', async () => {
		const { container } = setupTest();
		await checkPa11y(container);
	});

	test('should render', async () => {
		const { user, props } = setupTest({ props: { onClick: vi.fn() } });
		const btn = screen.getByText('Button');
		expect(btn).toBeTruthy();
		await user.click(btn);
		expect(props.onClick).toHaveBeenCalledTimes(1);
	});
});

type TestOverrides = {
	props?: Partial<TButton>;
};

const getDefaultProps = (overrides: Partial<TButton> = {}): TButton => ({
	...overrides,
});

const setupTest = (overrides: TestOverrides = {}) => {
	const props = getDefaultProps(overrides.props);
	const utils = render(
		<Button {...props}>{props.children ?? 'Button'}</Button>,
	);
	return {
		...utils,
		props,
		user: userEvent.setup(),
	};
};
