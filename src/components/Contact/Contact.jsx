import React from 'react';
import PropTypes from 'prop-types';

// STYLES
import * as ContactStyles from './Contact.styles';

// COMPONENTS
import { Text } from '../index';

const Contact = (props) => {
	const { id, data } = props;

	const contact = {
		name: data.name || '',
		email: data.email || '',
	};

	return (
		<ContactStyles.Wrapper data-testid={`${id}-contact-component`}>
			<ContactStyles.Photo data-testid={`${id}-contact-component-photo`}>
				<Text text={contact.name[0]} />
			</ContactStyles.Photo>
			<ContactStyles.Support data-testid={`${id}-contact-component-support`}>
				<ContactStyles.SupportLabel>
					<Text bold size="s" text={contact.name} />
				</ContactStyles.SupportLabel>
				<ContactStyles.Info data-testid={`${id}-contact-component-info`}>
					<Text size="s" text={contact.email} />
					<Text size="s" text={'020 0208 0208'} />
				</ContactStyles.Info>
			</ContactStyles.Support>
		</ContactStyles.Wrapper>
	);
};

Contact.propTypes = {
	id: PropTypes.string,
	data: PropTypes.shape({
		name: PropTypes.string,
		email: PropTypes.string,
	}),
};

export default Contact;
