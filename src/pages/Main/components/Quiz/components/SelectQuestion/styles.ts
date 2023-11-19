import styled from 'styled-components';
import Select from 'react-select';

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
