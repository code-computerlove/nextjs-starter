import type { NextPage } from 'next';

import React from 'react';

import { Meta } from '~/components/atoms/meta';
import { ExampleCounter } from '~/components/organisms/example-counter';
import { ExampleFetch } from '~/components/organisms/example-fetch';
import { Header } from '~/components/layout/header';

import styles from './index.module.css';

const TestPage: NextPage = () => {
	return (
		<>
			<Meta title="Next starter test" description="The test page" />
			<Header />
			<div className={styles.test}>
				<h1>Test page</h1>
				<ExampleCounter />
				<br />
				<ExampleFetch />
			</div>
		</>
	);
};

export default TestPage;
