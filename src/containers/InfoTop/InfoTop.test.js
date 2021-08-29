import React from 'react';
import { render } from '@testing-library/react';

// COMPONENTS
import InfoTop from './InfoTop';

let component;
const data = {
	name: 'John Smith',
	email: 'john.smith@feefo.com',
};

describe('InfoTop container', () => {
	beforeAll(() => {
		component = (props) => {
			return <InfoTop {...props} />;
		};
	});

	describe('should render', () => {
		const props = {
			id: 'test',
			data: data,
		};

		it('container', () => {
			const { getByTestId } = render(component(props));
			const wrapper = getByTestId('test-infotop-container');
			expect(wrapper.childElementCount).toBe(2);
		});

		it('top content', () => {
			const { queryByTestId } = render(component(props));
			const top = queryByTestId('test-infotop-container-top');

			expect(top).toBeTruthy();
		});

		it('bottom content', () => {
			const { queryByTestId } = render(component(props));
			const bottom = queryByTestId('test-infotop-container-bottom');

			expect(bottom).toBeTruthy();
		});
	});
});
