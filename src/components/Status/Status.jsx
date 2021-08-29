import React from 'react';

// STYLES
import { StatusStyles } from './Status.styles';

// COMPONENTS
import { Text } from '../index';

const Status = (props) => {
	const { status, label } = props;

	const setStatus = `${status || 0}%`;

	return (
		<StatusStyles>
			<Text text={setStatus} size="l" />
			<Text text={label} size="s" />
		</StatusStyles>
	);
};

export default Status;
