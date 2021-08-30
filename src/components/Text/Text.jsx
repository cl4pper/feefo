import React from 'react';
import PropTypes from 'prop-types';
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

	return (
		<TextStyles fontSize={fontSize[size || 'm']} bold={bold}>
			{text}
		</TextStyles>
	);
};

Text.propTypes = {
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	size: PropTypes.string,
	bold: PropTypes.bool,
};

export default Text;
