import React, { useState } from 'react';
import { Root, TitleWrapper } from './styles';
import { Link, Typography } from '../../../../components';
import { Quiz } from './components';

const Quizzes = () => {
    return (
        <Root>
            <TitleWrapper>
                <Typography tag="h2" weight="bold" size="title" textDecoration="none" textAlign="center" color="orange">
                    ВЫБЕРИТЕ, ЧТО ВАМ ВАЖНО В РАБОТЕ, И МЫ С ВАМИ СВЯЖЕМСЯ
                </Typography>
                <Typography
                    tag="p"
                    weight="bold"
                    size="description"
                    textDecoration="none"
                    textAlign="center"
                    color="black"
                >
                    Или просто позвоните нам:
                    <Link
                        color="orange"
                        variant="base"
                        href="tel:+79222144787"
                        display="nonFlex"
                        fontSize="description"
                        linkSize="base"
                    >
                        +7 (922) 214-47-87
                    </Link>
                    . Виктория
                </Typography>
            </TitleWrapper>
            <Quiz />
        </Root>
    );
};

export default Quizzes;
