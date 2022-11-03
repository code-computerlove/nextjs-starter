import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LinkButton, TLinkButton } from './index';
import { afterEach, describe, expect, test, vi } from 'vitest';

describe('atoms/button(LinkButton)', () => {
	afterEach(() => {
		vi.clearAllMocks();
		cleanup();
	});

	test('should render', () => {
		setupTest();
		const linkBtn = screen.getByText('Link Button');
		expect(linkBtn).toBeTruthy();
		expect(linkBtn.getAttribute('href')).toBe('/test');
	});
});

type TestOverrides = {
	props?: Partial<TLinkButton>;
};

const getDefaultProps = (
	overrides: Partial<TLinkButton> = {},
): TLinkButton => ({
	href: '/test',
	...overrides,
});

const setupTest = (overrides: TestOverrides = {}) => {
	const props = getDefaultProps(overrides.props);
	const utils = render(
		<LinkButton {...props}>{props.children ?? 'Link Button'}</LinkButton>,
	);
	return {
		...utils,
		props,
		user: userEvent.setup(),
	};
};
