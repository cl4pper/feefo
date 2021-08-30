import React from 'react';
import PropTypes from 'prop-types';
import * as InfoTopStyles from './InfoTop.styles';

// COMPONENTS
import { Text, Contact } from '../../components';

const InfoTop = (props) => {
	const { id, data } = props;

	return (
		<InfoTopStyles.Wrapper data-testid={`${id}-infotop-container`}>
			<Text align="right" size="l" text="Account Overview" />
			<InfoTopStyles.Right data-testid={`${id}-infotop-container-right`}>
				<InfoTopStyles.Title>
					<Text bold size="s" text="YOUR FEEFO SUPPORT CONTACT" />
				</InfoTopStyles.Title>
				<Contact data={data} />
			</InfoTopStyles.Right>
		</InfoTopStyles.Wrapper>
	);
};

InfoTop.propTypes = {
	id: PropTypes.string,
	data: PropTypes.shape({
		name: PropTypes.string,
		email: PropTypes.string,
	}),
};

export default InfoTop;
