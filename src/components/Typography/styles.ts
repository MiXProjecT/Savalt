import styled from 'styled-components';
import React from 'react';
import { IStyleTypography, ITypography } from './types';

const weightStyle = {
    bold: {
        fontWeight: '900',
    },
    medium: {
        fontWeight: '500',
    },
    regular: {
        fontWeight: '400',
    },
    base: {
        fontWeight: '400',
    },
};

const colorStyle = {
    orange: {
        color: '#E75A45',
    },
    black: {
        color: '#141414',
    },
    white: {
        color: '#ffffff',
    },
    base: {
        color: '#141414',
    },
};

const fontSizeStyles = {
    screen1538: {
        mainTitle: {
            fontSize: '3rem',
            lineHeight: '125%',
        },
        title: {
            fontSize: '2.4rem',
            lineHeight: '125%',
        },
        //24px
        subTitle: {
            fontSize: '1.5rem',
            lineHeight: '110%',
        },
        //18px
        description: {
            fontSize: '1.125rem',
            lineHeight: '140%',
        },
        //20px
        bigDescription: {
            fontSize: '1.25rem',
            lineHeight: '140%',
        },
        //16px
        smallDescription: {
            fontSize: '1rem',
            lineHeight: '140%',
        },
        //14px
        subtext: {
            fontSize: '0.875rem',
            lineHeight: '125%',
        },
        base: {
            fontSize: '1.125rem',
            lineHeight: '140%',
        },
    },
    screen640: {
        mainTitle: {
            fontSize: '1.8rem',
            lineHeight: '125%',
        },
        title: {
            fontSize: '1.4rem',
            lineHeight: '125%',
        },
        subTitle: {
            fontSize: '1.25rem',
            lineHeight: '110%',
        },
        description: {
            fontSize: '1rem',
            lineHeight: '140%',
        },
        bigDescription: {
            fontSize: '1.25rem',
            lineHeight: '140%',
        },
        smallDescription: {
            fontSize: '0.875rem',
            lineHeight: '140%',
        },
        subtext: {
            fontSize: '0.875rem',
            lineHeight: '125%',
        },
        base: {
            fontSize: '1rem',
            lineHeight: '140%',
        },
    },
};

export const StyleTypography = (Component: React.FC<ITypography>) => styled(Component)<IStyleTypography>`
    margin: 0;
    color: ${({ color }) => colorStyle[color || 'base'].color};
    text-decoration: ${({ textDecoration }) => textDecoration};
    text-align: ${({ textAlign }) => textAlign};
    font-weight: ${({ weight }) => weightStyle[weight || 'base'].fontWeight};
    font-size: ${({ size }) => fontSizeStyles.screen1538[size || 'base'].fontSize};
    line-height: ${({ size }) => fontSizeStyles.screen1538[size || 'base'].lineHeight};

    @media (max-width: 640px) {
        font-size: ${({ size }) => fontSizeStyles.screen640[size || 'base'].fontSize};
        line-height: ${({ size }) => fontSizeStyles.screen640[size || 'base'].lineHeight};
    }
`;
