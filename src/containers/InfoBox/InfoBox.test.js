import React from 'react';
import { render } from '@testing-library/react';

// COMPONENTS
import InfoBox from './InfoBox';

let component;
const data = {
	uploads: 8,
	successfulUploads: 3,
	linesAttempted: 20,
	linesSaved: 4,
	lastUploadDate: 1605001226079,
};

describe('InfoBox container', () => {
	beforeAll(() => {
		component = (props) => {
			return <InfoBox {...props} />;
		};
	});

	describe('should render', () => {
		const props = {
			id: 'test',
			data: data,
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
			const { queryByTestId, queryByText } = render(component(props));
			const bottom = queryByTestId('test-infobox-container-bottom');
			const statusLabel = queryByText('UPLOAD SUCCESS');
			const statusValue = queryByText('37.5%');
			const linesLabel = queryByText('LINES SAVED');
			const linesValue = queryByText('20%');

			expect(bottom).toBeTruthy();
			expect(statusLabel).toBeTruthy();
			expect(statusValue).toBeTruthy();
			expect(linesLabel).toBeTruthy();
			expect(linesValue).toBeTruthy();
		});
	});
});
