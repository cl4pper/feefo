import React from 'react';
import * as InfoTopStyles from './InfoTop.styles';

// COMPONENTS
import { Text, Contact } from '../../components';

const InfoTop = (props) => {
	const { id, data } = props;

	return (
		<InfoTopStyles.Wrapper data-testid={`${id}-infotop-container`}>
			<InfoTopStyles.Top data-testid={`${id}-infotop-container-top`}>
				<Text bold size="s" text="YOUR FEEFO SUPPORT CONTACT" />
			</InfoTopStyles.Top>
			<InfoTopStyles.Bottom data-testid={`${id}-infotop-container-bottom`}>
				<Text align="right" size="l" text="Account Overview" />
				<Contact data={data} />
			</InfoTopStyles.Bottom>
		</InfoTopStyles.Wrapper>
	);
};

export default InfoTop;
