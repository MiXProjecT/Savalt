import React from 'react';
import { Root, Logo } from './styles';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <Root>
            <Logo src={logo} />
        </Root>
    );
};

export default Footer;
