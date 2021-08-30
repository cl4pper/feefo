import React from 'react';
import PropTypes from 'prop-types';

// STYLES
import * as StatusStyles from './Status.styles';

// COMPONENTS
import { Text } from '../index';

const Status = (props) => {
	const { status, label } = props;

	const setStatus = `${status || 0}%`;

	return (
		<StatusStyles.Wrapper>
			<StatusStyles.Number>
				<Text bold text={setStatus} size="l" />
			</StatusStyles.Number>
			<StatusStyles.Label>
				<Text text={label} size="s" />
			</StatusStyles.Label>
		</StatusStyles.Wrapper>
	);
};

Status.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
};

export default Status;
