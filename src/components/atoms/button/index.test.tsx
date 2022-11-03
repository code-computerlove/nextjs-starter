import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, TButton } from './index';
import { afterEach, describe, expect, test, vi } from 'vitest';

describe('atoms/button', () => {
	afterEach(() => {
		vi.clearAllMocks();
		cleanup();
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
