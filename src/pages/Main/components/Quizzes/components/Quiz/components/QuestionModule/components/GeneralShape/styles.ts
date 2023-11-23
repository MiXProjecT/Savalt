import styled, { keyframes } from 'styled-components';
import Select from 'react-select';
import { IErrors } from './types';

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    row-gap: 3rem;
    @media (max-width: 640px) {
        row-gap: 1.4rem;
    }
`;

export const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    row-gap: 0.8rem;
    width: 40%;

    @media (max-width: 640px) {
        width: 100%;
    }

    .Select__container {
        width: 100%;
    }
`;

export const StyledSelect = styled(Select)`
    .Select__control {
        width: 100%;
        height: 3.75rem;
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid #b2b2b2;
    }

    .Select__input-container {
        color: #141414;
    }

    .Select__control:hover {
        border-color: #7e7e7e;
    }

    .Select__control--is-focused {
        border-color: #7e7e7e;
        box-shadow: none;
        outline: none;
    }

    .Select__indicator {
        color: #141414;
    }

    .Select__indicator-separator {
        display: none;
    }

    .Select__menu {
        color: #141414;
    }

    .Select__option {
    }
`;

/*
export const StyledSelect = styled.div`
    .Select__container {
        width: 100%;
    }

    .Select__control {
        width: 100%;
        height: 3.75rem;
        border-radius: 5px;
        cursor: pointer;
        border: none;
        background-color: #d6d6d6;
    }

    .Select__input-container {
        color: #141414;
    }

    .Select__control:hover {
        border-color: #a1a1a1;
    }

    .Select__control--is-focused {
        box-shadow: 0 0 0 1px black;
        outline: none;
    }

    .Select__indicator {
        color: #141414;
    }
    .Select__indicator-separator {
        display: none;
    }

    .Select__menu {
        color: #141414;
    }
`;
*/

export const InputTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    row-gap: 1rem;
    width: 40%;

    @media (max-width: 640px) {
        width: 100%;
    }
`;

export const InputField = styled.input<IErrors>`
    box-sizing: border-box;
    height: 3.75rem;
    width: 100%;
    border: 1px solid #b2b2b2;
    border-radius: 5px;
    text-align: left;
    padding: 10px;
    font-size: 1rem;
    animation: ${({ errors }) => (errors ? 'shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both' : 'none')};
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;

    @keyframes shake {
        10%,
        90% {
            transform: translate3d(-1px, 0, 0);
        }

        20%,
        80% {
            transform: translate3d(2px, 0, 0);
        }

        30%,
        50%,
        70% {
            transform: translate3d(-4px, 0, 0);
        }

        40%,
        60% {
            transform: translate3d(4px, 0, 0);
        }
    }

    &:focus {
        border-color: #7e7e7e;
        outline: 0;
        outline-offset: 0;
    }
    &:hover {
        border-color: #7e7e7e;
        outline: 0;
        outline-offset: 0;
    }

    @media (max-width: 640px) {
        height: 2.8rem;
    }
`;

export const ErrorsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    row-gap: 0.4rem;
`;
