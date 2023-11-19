import styled from 'styled-components';

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

export const InputField = styled.input`
    box-sizing: border-box;
    height: 3.75rem;
    width: 100%;
    background-color: #d6d6d6;
    border-radius: 5px;
    text-align: center;
    border: none;

    @media (max-width: 640px) {
        height: 2.8rem;
    }
`;
