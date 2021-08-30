import React from 'react';
import PropTypes from 'prop-types';

// STYLES
import { BoxStyles } from './Box.styles';

const Box = (props) => {
	const { content, id } = props;

	return <BoxStyles data-testid={`${id}-box-component`}>{content}</BoxStyles>;
};

Box.propTypes = {
	id: PropTypes.string,
	content: PropTypes.element,
};

export default Box;
