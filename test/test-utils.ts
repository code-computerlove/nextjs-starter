import { expect } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';

export const checkA11y = async (
	component: string | Element,
	axeOptions = {},
) => {
	expect.extend(toHaveNoViolations);
	const results = await axe(component, axeOptions);

	expect(results).toHaveNoViolations();
};
