import React from 'react';
import { TextStyles } from './Text.styles';

const Text = (props) => {
    const { text, size } = props;

    const fontSize = {
        'xl': () => 32,
        'l': () => 24,
        'default': () => 16,
        's': () => 12,
        'xs': () => 8,
    };

    return (
        <TextStyles fontSize={fontSize[size || 'default']}>
            {text}
        </TextStyles>
    )
}

export default Text;