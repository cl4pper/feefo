import React from 'react';

// STYLES
import * as InfoBoxStyles from './InfoBox.styles';

// COMPONENTS
import { Box, Status } from '../../components';

const InfoBox = (props) => {
	const { id } = props;

	return (
		<InfoBoxStyles.Wrapper data-testid={`${id}-infobox-container`}>
			<InfoBoxStyles.Top data-testid={`${id}-infobox-container-top`}>
				<Box content={<Status status={9} label="UPLOAD SUCCESS" />} />
			</InfoBoxStyles.Top>
			<InfoBoxStyles.Bottom data-testid={`${id}-infobox-container-bottom`}>
				<InfoBoxStyles.BottomLeft data-testid={`${id}-infobox-container-bottom-left`}>
					<Box content={<Status status={9} label="UPLOAD SUCCESS" />} />
				</InfoBoxStyles.BottomLeft>
				<InfoBoxStyles.BottomRight data-testid={`${id}-infobox-container-bottom-right`}>
					<Box content={<Status status={0} label="LINES SAVED" />} />
				</InfoBoxStyles.BottomRight>
			</InfoBoxStyles.Bottom>
		</InfoBoxStyles.Wrapper>
	);
};

export default InfoBox;
