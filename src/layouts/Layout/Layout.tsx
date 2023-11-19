import React from 'react';
import { Root } from './styles';
import { Footer } from '../Footer';
import { Main } from '../../pages';
import { Header } from '../Header';

const Layout = () => {
    return (
        <Root>
            <Header />
            <Main />
            <Footer />
        </Root>
    );
};

export default Layout;
