import styled from 'styled-components';
import radioButtonActive from '../../../../../../../../../../assets/images/radioButtonNotActive.svg';
import radioButtonNotActive from '../../../../../../../../../../assets/images/radioButtonActive.svg';

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

export const RadioWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    row-gap: 0.8rem;
`;

export const Radio = styled.div`
    margin-right: 30px;
`;

export const Input = styled.input`
    display: none;

    &:disabled + label:before {
        filter: grayscale(100%);
    }

    &:checked + label:before {
        background: url(${radioButtonNotActive}) center no-repeat;
        background-size: 100% 100%;
    }
`;

export const Label = styled.label`
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding-left: 2rem;
    margin-right: 0;
    line-height: 1.64rem;
    user-select: none;

    &:before {
        content: '';
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        left: 0;
        bottom: 1px;
        background: url(${radioButtonActive}) center no-repeat;
        background-size: 100% 100%;
    }

    &:hover:before {
        filter: brightness(250%);
    }
`;
