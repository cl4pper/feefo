import React from 'react';
import { render } from '@testing-library/react';

// COMPONENTS
import Box from './Box';

let component;

describe('Box component', () => {
	beforeAll(() => {
		component = (props) => {
			return <Box {...props} />;
		};
	});

	it('should render', () => {
		const props = {
			id: 'test',
			content: <p>Hello, content</p>,
		};

		const { getByTestId } = render(component(props));
		const wrapper = getByTestId('test-box-component');
		const firstChild = wrapper.firstChild;

		expect(wrapper.childElementCount).toBe(1);
		expect(firstChild.textContent).toBe('Hello, content');
	});
});
