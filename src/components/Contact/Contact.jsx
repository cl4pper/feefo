import React from 'react';

// STYLES
import * as ContactStyles from './Contact.styles';

// COMPONENTS
import { Text } from '../index';

const Contact = (props) => {
	const { id, name, email, phone } = props;

	return (
		<ContactStyles.Wrapper data-testid={`${id}-contact-component`}>
			<ContactStyles.Photo data-testid={`${id}-contact-component-photo`}>
				<Text text={name ? name[0] : 'A'} />
			</ContactStyles.Photo>
			<ContactStyles.Support data-testid={`${id}-contact-component-support`}>
				<ContactStyles.SupportLabel>
					<Text bold size="s" text="Support" />
				</ContactStyles.SupportLabel>
				<ContactStyles.Info data-testid={`${id}-contact-component-info`}>
					<Text size="s" text={email || 'user@email.com'} />
					<Text size="s" text={phone || '020 0208 0208'} />
				</ContactStyles.Info>
			</ContactStyles.Support>
		</ContactStyles.Wrapper>
	);
};

export default Contact;
