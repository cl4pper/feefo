import React from 'react';
import { render } from '@testing-library/react';

// COMPONENTS
import Overview from './Overview';

let component;
const data = {
	supportContact: {
		name: 'John Smith',
		email: 'john.smith@feefo.com',
	},
	salesOverview: {
		uploads: 8,
		successfulUploads: 3,
		linesAttempted: 20,
		linesSaved: 4,
		lastUploadDate: 1605001226079,
	},
};

describe('Overview container', () => {
	beforeAll(() => {
		component = (props) => {
			return <Overview {...props} />;
		};
	});

	describe('should render', () => {
		const props = {
			id: 'test',
			data: data,
		};

		it('container', () => {
			const { getByTestId } = render(component(props));
			const wrapper = getByTestId('test-overview-container');
			expect(wrapper.childElementCount).toBe(2);
		});
	});
});
