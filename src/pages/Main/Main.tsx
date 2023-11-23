import React from 'react';
import { Root, MainBackground } from './styles';
import { Home, Description, Quizzes } from './components';

const Main = () => {
    return (
        <MainBackground>
            <Root>
                <Home />
                <Description />
                <Quizzes />
            </Root>
        </MainBackground>
    );
};

export default Main;
