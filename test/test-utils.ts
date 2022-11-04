import { expect } from 'vitest';
import { axe } from 'vitest-axe';
import * as matchers from 'vitest-axe/matchers';
expect.extend(matchers);

export const checkPa11y = async (
	component: string | Element,
	axeOptions = {},
) => {
	const results = await axe(component, axeOptions);

	expect(results).toHaveNoViolations();
};
