import { createElement, FC } from 'react';
import { ITypography, IStyleTypography } from './types';
import { StyleTypography } from './styles';

// ограничиваться 2мя пропсами
// убрать rest
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

// variant = 'body1semilbold';
// variant = 'body1bold';
// variant = 'сaption1semibold';
// variant = 'сaption1bold'; -- не существует
