---
to: "src/components/<%= type %>/<%= name %>/index.stories.tsx"
---
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styles from './index.module.css';

import <%= h.inflection.camelize(name) %> from './'

export default {
	title: '<%= type %>/<%=name %>',
  component: <%= h.inflection.camelize(name) %>,
	argTypes: {},
} as ComponentMeta<typeof <%= h.inflection.camelize(name) %>>;

const Template: ComponentStory<typeof <%= h.inflection.camelize(name) %>> = (args) => {
	return (
		<div className={styles.storybookBg}>
			<<%= h.inflection.camelize(name) %> {...args} />
		</div>
	);
};

export const Primary = Template.bind({});
Primary.args = {};
