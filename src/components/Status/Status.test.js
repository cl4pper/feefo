import React from 'react';
import { render } from '@testing-library/react';

// COMPONENTS
import Status from './Status';

let component;

describe('Status component', () => {
	beforeAll(() => {
		component = (props) => {
			return <Status {...props} />;
		};
	});

	describe('should render', () => {
		const props = {
			status: '8',
			label: 'Status label',
		};

		it('status value', () => {
			const { getByText } = render(component(props));

			expect(getByText('8%').textContent).toBeTruthy();
		});

		it('label', () => {
			const { getByText } = render(component(props));

			expect(getByText('Status label').textContent).toBeTruthy();
		});
	});
});
