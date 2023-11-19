import React from 'react';

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'leftArrow' | 'rightArrow' | 'base' | 'control';
    children?: string;
    onClick?: () => void;
}

export interface IButtonStyle {
    variant: 'leftArrow' | 'rightArrow' | 'base' | 'control';
}
