import React from 'react';

export interface ITypography {
    tag: string;
    children: string | React.ReactNode;
    className?: string;
    textDecoration: string;
    textAlign: string;
    color: 'orange' | 'black' | 'white';
    weight: 'bold' | 'medium' | 'regular';
    size: 'mainTitle' | 'title' | 'subTitle' | 'description' | 'bigDescription' | 'smallDescription' | 'subtext';
}

export interface IStyleTypography {
    className?: string;
    textDecoration: string;
    textAlign: string;
    color: 'orange' | 'black' | 'white';
    weight: 'bold' | 'medium' | 'regular';
    size: 'mainTitle' | 'title' | 'subTitle' | 'description' | 'bigDescription' | 'smallDescription' | 'subtext';
}
