import styled from 'styled-components';
import Select from 'react-select';

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
