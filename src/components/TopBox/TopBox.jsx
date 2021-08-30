import React from 'react';
import PropTypes from 'prop-types';
import * as TopBoxStyles from './TopBox.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import { Text } from '../index';

const Box = (props) => {
	const { id, data } = props;

	const uploads = data.uploads || 0;
	const lines = data.linesSaved || 0;

	return (
		<TopBoxStyles.Wrapper data-testid={`${id}-topbox-component`}>
			<TopBoxStyles.Top data-testid={`${id}-topbox-component-top`}>
				<TopBoxStyles.TopTitle>
					<TopBoxStyles.UploadIcon>
						<FontAwesomeIcon icon={faUpload} />
					</TopBoxStyles.UploadIcon>
					<Text bold text="Sales" />
				</TopBoxStyles.TopTitle>
				<TopBoxStyles.InfoIcon>
					<FontAwesomeIcon icon={faInfoCircle} />
				</TopBoxStyles.InfoIcon>
			</TopBoxStyles.Top>
			<TopBoxStyles.Bottom data-testid={`${id}-topbox-component-bottom`}>
				<Text size="s" text="You had" />
				&nbsp;
				<Text size="s" bold text={uploads} />
				&nbsp;
				<Text bold size="s" text="uploads" />
				&nbsp;
				<Text size="s" text="and" />
				&nbsp;
				<Text size="s" bold text={lines} />
				&nbsp;
				<Text size="s" text="lines added." />
			</TopBoxStyles.Bottom>
		</TopBoxStyles.Wrapper>
	);
};

Box.propTypes = {
	id: PropTypes.string,
	data: PropTypes.shape({
		uploads: PropTypes.number,
		successfulUploads: PropTypes.number,
		linesAttempted: PropTypes.number,
		linesSaved: PropTypes.number,
		lastUploadDate: PropTypes.number,
	}),
};

export default Box;
