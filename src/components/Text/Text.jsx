import React from 'react';
import { TextStyles } from './Text.styles';

const Text = (props) => {
	const { text, size, bold } = props;

	const fontSize = {
		xl: 32,
		l: 24,
		m: 16,
		s: 12,
		xs: 8,
	};

	const styleProps = {
		bold,
	};

	return (
		<TextStyles fontSize={fontSize[size || 'm']} {...styleProps}>
			{text}
		</TextStyles>
	);
};

export default Text;
