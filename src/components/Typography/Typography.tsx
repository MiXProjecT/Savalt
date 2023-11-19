import { createElement, FC } from 'react';
import { ITypography, IStyleTypography } from './types';
import { StyleTypography } from './styles';

const Typography: FC<ITypography> = ({ tag, weight, size, textDecoration, textAlign, color, ...rest }) =>
    createElement<IStyleTypography>(
        tag,
        {
            className: rest.className,
            weight,
            size,
            textDecoration,
            textAlign,
            color,
        },
        rest.children,
    );

export default StyleTypography(Typography);
