import React from 'react';
import { render } from '@testing-library/react';

// COMPONENTS
import Contact from './Contact';

let component;

describe('Contact component', () => {
	beforeAll(() => {
		component = (props) => {
			return <Contact {...props} />;
		};
	});

	describe('should render', () => {
		const props = {
			id: 'test',
			name: 'User Name',
			email: 'userName@email.com',
			phone: '110 1112 1113',
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

			expect(firstChild.textContent).toBe('U');
		});

		it('contact info', () => {
			const { queryByTestId } = render(component(props));
			const wrapper = queryByTestId('test-contact-component-info');
			const email = wrapper.firstChild;
			const phone = wrapper.lastChild;

			expect(email.textContent).toBe('userName@email.com');
			expect(phone.textContent).toBe('110 1112 1113');
		});
	});
});
