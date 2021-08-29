import React from 'react';
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

export default Overview;
