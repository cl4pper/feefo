import React from 'react';
import { TextStyles } from './Text.styles';

const Text = (props) => {
    const { text, size } = props;

    const fontSize = {
        'xl': 32,
        'l': 24,
        'm': 16,
        's': 12,
        'xs': 8,
    };

    return (
        <TextStyles fontSize={fontSize[size || 'm']}>
            {text}
        </TextStyles>
    )
}

export default Text;