import React from 'react';

// STYLES
import { BoxStyles } from './Box.styles';

const Box = (props) => {
	const { content, id } = props;

	return <BoxStyles data-testid={`${id}-box-component`}>{content}</BoxStyles>;
};

export default Box;
