import type { ComponentStory, ComponentMeta } from '@storybook/react';

import React from 'react';
import { ExampleFetch } from './index';

export default {
	title: 'organisms/example-fetch',
	component: ExampleFetch,
} as ComponentMeta<typeof ExampleFetch>;

const Template: ComponentStory<typeof ExampleFetch> = (args) => {
	return <ExampleFetch {...args} />;
};

export const Primary = Template.bind({});
