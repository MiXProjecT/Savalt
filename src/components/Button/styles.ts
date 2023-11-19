import styled from 'styled-components';
import { IButtonStyle } from './types';

const stylesButton = {
    leftArrow: {
        border: 'none',
        background: 'none',
        backgroundColor: 'white',
        backgroundSize: '100% 100%',
        width: '14px',
        height: '29px',
        borderRadius: 'none',
    },
    rightArrow: {
        border: 'none',
        background: 'none',
        backgroundColor: 'white',
        backgroundSize: '100% 100%',
        width: '14px',
        height: '29px',
        borderRadius: 'none',
    },
    control: {
        border: 'none',
        background: 'none',
        backgroundColor: '#E75A45',
        backgroundSize: '100% 100%',
        width: '140px',
        height: '40px',
        borderRadius: '46px',
    },
    base: {
        border: 'none',
        background: 'none',
        backgroundColor: '#E75A45',
        backgroundSize: '100% 100%',
        width: '240px',
        height: '50px',
        borderRadius: '46px',
    },
};

export const ButtonStyle = styled.button<IButtonStyle>`
    width: ${({ variant }) => stylesButton[variant || 'base'].width};
    height: ${({ variant }) => stylesButton[variant || 'base'].height};
    border: ${({ variant }) => stylesButton[variant || 'base'].border};
    background-image: url(${({ variant }) => stylesButton[variant || 'base'].background});
    background-color: ${({ variant }) => stylesButton[variant || 'base'].backgroundColor};
    background-size: ${({ variant }) => stylesButton[variant || 'base'].backgroundSize};
    border-radius: ${({ variant }) => stylesButton[variant || 'base'].borderRadius};
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    color: white;
    font-weight: 600;
`;
