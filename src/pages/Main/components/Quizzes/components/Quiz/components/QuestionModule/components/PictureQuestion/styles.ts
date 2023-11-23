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

export const RadioWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

export const Radio = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
`;

export const Input = styled.input`
    display: none;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 0.5rem;
    cursor: pointer;
    user-select: none;
`;

export const Image = styled.img`
    width: 18vw;
    height: 18vw;
    object-fit: cover;
    object-position: 50% 50%;

    @media (max-width: 640px) {
        width: 50vw;
        height: 50vw;
    }
`;
