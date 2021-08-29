import React from 'react';
import { render } from '@testing-library/react';

// COMPONENTS
import Contact from './Contact';

let component;
const data = {
	name: 'John Smith',
	email: 'john.smith@feefo.com',
};

describe('Contact component', () => {
	beforeAll(() => {
		component = (props) => {
			return <Contact {...props} />;
		};
	});

	describe('should render', () => {
		const props = {
			id: 'test',
			data: data,
		};

		it('component', () => {
			const { getByTestId } = render(component(props));
			const wrapper = getByTestId('test-contact-component');

			expect(wrapper).toBeTruthy();
		});

		it('user name initial', () => {
			const { queryByTestId } = render(component(props));
			const wrapper = queryByTestId('test-contact-component-photo');
			const firstChild = wrapper.firstChild;

			expect(firstChild.textContent).toBe('J');
		});

		it('contact info', () => {
			const { queryByTestId } = render(component(props));
			const wrapper = queryByTestId('test-contact-component-info');
			const email = wrapper.firstChild;

			expect(email.textContent).toBe('john.smith@feefo.com');
		});
	});
});
