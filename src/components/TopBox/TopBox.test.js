import React from 'react';
import { render } from '@testing-library/react';

// COMPONENTS
import TopBox from './TopBox';

let component;
const data = {
	uploads: 8,
	successfulUploads: 3,
	linesAttempted: 20,
	linesSaved: 4,
	lastUploadDate: 1605001226079,
};

describe('TopBox component', () => {
	beforeAll(() => {
		component = (props) => {
			return <TopBox {...props} />;
		};
	});

	describe('should render', () => {
		const props = {
			id: 'test',
			data: data,
		};

		it('component', () => {
			const { getByTestId } = render(component(props));
			const wrapper = getByTestId('test-topbox-component');

			expect(wrapper).toBeTruthy();
			expect(wrapper.childElementCount).toBe(2);
		});

		it('top', () => {
			const { queryByTestId, queryByText } = render(component(props));
			const top = queryByTestId('test-topbox-component-top');
			const text = queryByText('Sales');

			expect(top).toBeTruthy();
			expect(text).toBeTruthy();
		});

		it('bottom', () => {
			const { queryByTestId, queryByText } = render(component(props));
			const bottom = queryByTestId('test-topbox-component-bottom');
			const upload = queryByText('8');
			const lines = queryByText('4');

			expect(bottom).toBeTruthy();
			expect(upload).toBeTruthy();
			expect(lines).toBeTruthy();
			// expect(bottom.textContent).toBe('You had 8 uploads and 4 lines added.');
		});
	});
});
