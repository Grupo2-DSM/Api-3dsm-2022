import styled from 'styled-components';
import {theme} from '../../global/styles/theme';

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
    padding: 0px;
    margin: 50px auto;
`;

export const InputTitle = styled.input`
    width: 97%;
    height: 45px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.primary75};
    padding: 0px 10px;
    margin: 10px 0px;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    outline: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);

    ::placeholder {
        color: ${theme.colors.primary75};
    }
`;

export const TextArea = styled.textarea`
    width: 97%;
    height: 150px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.primary75};
    padding: 10px;
    margin-top: 20px;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    outline: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);

    ::placeholder {
        color: ${theme.colors.primary75};
    }
`;

export const FormContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 30px;
    margin: 0px;
`;

export const FormContentRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
`;

export const Selection = styled.select`
    width: 48%;
    height: 45px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.primary75};
    padding: 0px 10px;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    outline: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
`;

export const Input = styled.input`
    width: 45%;
    height: 45px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.primary75};
    padding: 0px 10px;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    outline: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);

    ::placeholder {
        color: ${theme.colors.primary75};
    }
`;

export const FormContentPriority = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin-top: 30px;
`;

export const Button = styled.button`
    width: 24%;
    height: 45px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.primary75};
    padding: 0px 10px;
    margin: 30px 0px;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    outline: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
`;