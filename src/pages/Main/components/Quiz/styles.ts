import styled from 'styled-components';
import { IFiller } from './types';

export const Root = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    row-gap: 3rem;

    @media (max-width: 1180px) {
        padding: 2.18rem 2.8rem 0;
        row-gap: 2rem;
    }

    @media (max-width: 640px) {
        padding: 1rem 1rem 0;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 0.8rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: #efefef;
    box-sizing: border-box;
    border-radius: 40px;
    padding: 4rem 3rem 6rem;
    width: 100%;
    gap: 2em;

    @media (max-width: 910px) {
        padding: 2rem 2rem 4rem;
    }

    @media (max-width: 640px) {
        padding: 2rem 1rem;
    }
`;

export const ControlButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    column-gap: 0.4rem;
    padding-top: 20px;
`;

export const ProgressBar = styled.div`
    height: 6px;
    width: 14rem;
    background-color: #e8bfb7;
    border-radius: 50px;
`;

export const Filler = styled.div<IFiller>`
    height: 100%;
    width: ${({ completed }) => completed}%;
    background-color: #e75a45;
    border-radius: inherit;
    transition: width 1s ease-in-out;
`;
