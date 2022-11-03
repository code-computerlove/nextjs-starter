import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button, TButton } from './index';


describe('atoms/button', () => {
	it('should render', async () => {
		setupTest();
		const btn = screen.getByText('Button');
		expect(btn).toBeTruthy();
		
	});

	// TODO  Add test for LinkButton
});

type TestOverrides = {
  props?: Partial<TButton>
}

const getDefaultProps = (
  overrides: Partial<TButton> = {}
): TButton => ({
  ...overrides,
})

const setupTest = (overrides: TestOverrides = {}) => {
  const props = getDefaultProps();
  const utils = render(
    <Button>{props.children ?? 'Button'}</Button>
  );
  return {
    ...utils,
    props,
  }
}
