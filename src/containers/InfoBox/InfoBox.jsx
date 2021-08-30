import React from 'react';
import PropTypes from 'prop-types';

// STYLES
import * as InfoBoxStyles from './InfoBox.styles';

// COMPONENTS
import { Box, Status, TopBox } from '../../components';

const InfoBox = (props) => {
	const { id, data } = props;

	function getPercent(applied, total) {
		return applied !== 0 && total !== 0 ? (applied / total) * 100 : 0;
	}

	const uploads = data.uploads || 0;
	const successfulUploads = data.successfulUploads || 0;
	const status = getPercent(successfulUploads, uploads);

	const linesAttempted = data.linesAttempted || 0;
	const linesSaved = data.linesSaved || 0;
	const lines = getPercent(linesSaved, linesAttempted);

	const topProps = {
		uploads,
		lines,
	};

	return (
		<InfoBoxStyles.Wrapper data-testid={`${id}-infobox-container`}>
			<InfoBoxStyles.Top data-testid={`${id}-infobox-container-top`}>
				<TopBox data={topProps} />
			</InfoBoxStyles.Top>
			<InfoBoxStyles.Bottom data-testid={`${id}-infobox-container-bottom`}>
				<InfoBoxStyles.BottomLeft data-testid={`${id}-infobox-container-bottom-left`}>
					<Box content={<Status status={status} label="UPLOAD SUCCESS" />} />
				</InfoBoxStyles.BottomLeft>
				<InfoBoxStyles.BottomRight data-testid={`${id}-infobox-container-bottom-right`}>
					<Box content={<Status status={lines} label="LINES SAVED" />} />
				</InfoBoxStyles.BottomRight>
			</InfoBoxStyles.Bottom>
		</InfoBoxStyles.Wrapper>
	);
};

InfoBox.propTypes = {
	id: PropTypes.string,
	data: PropTypes.shape({
		uploads: PropTypes.number,
		successfulUploads: PropTypes.number,
		linesAttempted: PropTypes.number,
		linesSaved: PropTypes.number,
		lastUploadDate: PropTypes.number,
	}),
};

export default InfoBox;
