import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const HomeContent = styled.div`
    display: flex;
    padding-left: 260px;
    justify-content: flex-start;
`
export const HomeContainer = styled.div`
    
    margin: 10px;
    padding: 10px;
    border-radius: 3px;
    box-shadow: 0 3px 3px 0 rgba(1, 22, 39, 0.01);
    background-color: ${props => props.theme.colors.white};
`
export const Form1= styled.form`
    width: 200px;
    min-height: 100px;
`
export const Form2= styled.form`
   width: 600px;
    min-height: 300px;
    flex-grow: 2;
`
export const Form3= styled.form`
    width: 300px;
    min-height: 200px;
    flex-grow: 1;

`

export const FormH1 = styled.h1`
    max-width: 400px;
    width: 100%;
    z-index: 1;
    margin: 16px auto;
    font-family: ${props => props.theme.fonts.main};
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.85;
    letter-spacing: normal;
    text-align: left;
    color:${props => props.theme.colors.black};
`
export const FormH2 = styled.h2`
    max-width: 400px;
    width: 100%;
    z-index: 1;
    margin: 16px auto;
    font-family:  ${props => props.theme.fonts.main};
    font-size: 22px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.85;
    letter-spacing: normal;
    text-align: left;
    color: ${props => props.theme.colors.black};
`

export const FormLabel = styled.label`
    width: 101px;
    height: 27px;
    margin: 0 122.8px 0 0;
    font-family:  ${props => props.theme.fonts.main};
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: normal;
    text-align: left;
    color: ${props => props.theme.colors.black};
`

export const FormInput = styled.input`
    max-width: 348px;
    height: 40px;
    margin: 0px 0;
    padding: 6.5px 88px 6.5px 8px;
    border-radius: 8px;
    border: solid 1px ${props => props.theme.colors.white};
    &::placeholder {
        opacity: 0.5;
        font-family:  ${props => props.theme.fonts.main};
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.11;
        letter-spacing: normal;
        text-align: left;
        color: ${props => props.theme.colors.placeholder};
      }
`
export const FormButton = styled.button`
    width: 92px;
    height: 38px;
    margin: 0px 1px 10px 280px;
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    background-color: ${props => props.theme.colors.buttonBackground};
    opacity: 0.5;
    font-family:  ${props => props.theme.fonts.main};
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: ${props => props.theme.colors.placeholder};
`

export const Text = styled.span`
    margin: 0px 29.8px 0px 0;
    font-family:  ${props => props.theme.fonts.main};
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color:  ${props => props.theme.colors.placeholder};
`