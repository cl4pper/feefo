import React from 'react';
import { render } from '@testing-library/react';

// COMPONENTS
import InfoBox from './InfoBox';

let component;

describe('InfoBox container', () => {
	beforeAll(() => {
		component = (props) => {
			return <InfoBox {...props} />;
		};
	});

	describe('should render', () => {
		const props = {
			id: 'test',
		};

		it('container', () => {
			const { getByTestId } = render(component(props));
			const wrapper = getByTestId('test-infobox-container');
			expect(wrapper.childElementCount).toBe(2);
		});

		it('top content', () => {
			const { queryByTestId } = render(component(props));
			const top = queryByTestId('test-infobox-container-top');

			expect(top).toBeTruthy();
		});

		it('bottom content', () => {
			const { queryByTestId } = render(component(props));
			const bottom = queryByTestId('test-infobox-container-bottom');

			expect(bottom).toBeTruthy();
		});
	});
});
