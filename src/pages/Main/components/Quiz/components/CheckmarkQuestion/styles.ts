import styled from 'styled-components';
import checkboxActive from '../../../../../../assets/images/checkboxActive.svg';
import checkbox from '../../../../../../assets/images/checkbox.svg';

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

export const CheckmarkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    row-gap: 0.8rem;
`;

export const Label = styled.label`
    display: block;
    margin: 0 0 10px 0;
    cursor: pointer;
    user-select: none;
    position: relative;
`;

export const Input = styled.input`
    position: absolute;
    z-index: -1;
    opacity: 0;
    display: block;
    width: 0;
    height: 0;

    :checked + span:before {
        background: url(${checkboxActive}) center no-repeat;
        background-size: 100% 100%;
    }
`;

export const Span = styled.span`
    display: inline-block;
    position: relative;
    padding: 0 0 0 35px;
    line-height: 22px;

    :before {
        content: '';
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        left: 0;
        top: 0;
        transition: background 0.3s ease;
        background: url(${checkbox}) center no-repeat;
        background-size: 100% 100%;
    }

    :hover:before {
        filter: brightness(110%);
    }

    :active:before {
        filter: brightness(80%);
    }
`;
