import styled from 'styled-components';
import {theme} from '../../global/styles/theme';

export const FooterContainer = styled.footer`
    position: absolute;
    bottom: 0;
    background-color: ${theme.colors.primary75};
    color: #FFF;
    width: 100%;
    height: 80px;    
    text-align: center;
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const FooterText = styled.div`
    a {
        color: ${theme.colors.primary0};
        text-decoration: none;
        margin-left: 0.3rem;
    }
`;