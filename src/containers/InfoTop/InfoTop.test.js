import React from 'react';
import { render } from '@testing-library/react';

// COMPONENTS
import InfoTop from './InfoTop';

let component;
const data = {
	name: 'Elton John',
	email: 'sireltonjohn@feefo.com',
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

		it('top title', () => {
			const { queryByText } = render(component(props));
			const title = queryByText('Account Overview');

			expect(title).toBeTruthy();
		});

		it('right content', () => {
			const { queryByTestId, queryByText } = render(component(props));
			const right = queryByTestId('test-infotop-container-right');
			const title = queryByText('YOUR FEEFO SUPPORT CONTACT');
			const name = queryByText('Elton John');
			const email = queryByText('sireltonjohn@feefo.com');

			expect(right).toBeTruthy();
			expect(title).toBeTruthy();
			expect(name).toBeTruthy();
			expect(email).toBeTruthy();
		});
	});
});
