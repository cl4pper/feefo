import React from 'react';
import PropTypes from 'prop-types';
import * as OverviewStyles from './Overview.styles';

// COMPONENTS
import { InfoTop, InfoBox } from '../index';

const Overview = (props) => {
	const { id, data } = props;

	const supportInfo = data ? { ...data.supportContact } : {};
	const salesInfo = data ? { ...data.salesOverview } : {};

	return (
		<OverviewStyles.Wrapper data-testid={`${id}-overview-container`}>
			<OverviewStyles.Header>
				<InfoTop data={supportInfo} />
			</OverviewStyles.Header>
			<InfoBox data={salesInfo} />
		</OverviewStyles.Wrapper>
	);
};

Overview.propTypes = {
	id: PropTypes.string,
	data: PropTypes.shape({
		supportContact: PropTypes.shape({
			name: PropTypes.string,
			email: PropTypes.string,
		}),
		salesOverview: PropTypes.shape({
			uploads: PropTypes.number,
			successfulUploads: PropTypes.number,
			linesAttempted: PropTypes.number,
			linesSaved: PropTypes.number,
			lastUploadDate: PropTypes.number,
		}),
	}),
};

export default Overview;
