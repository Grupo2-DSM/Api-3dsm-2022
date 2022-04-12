import styled from 'styled-components';
import { theme } from '../../global/styles/theme';

export const Container = styled.div`
    color: ${theme.colors.primary75};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    h1 {
        font-size: 40px;
    }
`;

export const Button = styled.button`
    background-color: transparent;
    border: 1px solid ${theme.colors.primary75};
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: 184px;
    height: 45px;
    font-size: 16px;
    font-weight: 500;
    color: ${theme.colors.primary75};
    cursor: pointer;
`;