import styled from 'styled-components'



export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const Form= styled.form`
    width: 400px;
    height: 311px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto 250px;
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0 16px 16px 0 rgba(1, 22, 39, 0.01);
    background-color: #fff;
`

export const FormH1 = styled.h1`
    max-width: 400px;
    width: 100%;
    z-index: 1;
    display: flex;
    margin: 16px auto;
    padding-top: 60px;
    font-family: Heebo;
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.85;
    letter-spacing: normal;
    text-align: left;
    color: #011627;
`

export const FormLabel = styled.label`
    width: 101px;
    height: 27px;
    margin: 0 122.8px 0 0;
    font-family: Heebo;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: normal;
    text-align: left;
    color: #2d2d2f;
`

export const FormInput = styled.input`
    max-width: 348px;
    height: 40px;
    margin: 0px 0;
    padding: 6.5px 88px 6.5px 8px;
    border-radius: 8px;
    border: solid 1px #eff2f6;
    &::placeholder {
        opacity: 0.5;
        font-family: Heebo;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.11;
        letter-spacing: normal;
        text-align: left;
        color: #515151;
      }
`
export const FormButton = styled.button`
    width: 92px;
    height: 38px;
    margin: 0px 1px 10px 310px;
    padding: 8px 5px;
    border-radius: 8px;
    border: none;
    background-color: #dbdbdb;
    opacity: 0.5;
    font-family: Heebo;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #515151;
`

export const Text = styled.span`
    margin: 0px 29.8px 0px 0;
    font-family: Heebo;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #515151;
`

export const TextY = styled.span`
    padding-left: 5px;
    height: 18px;
    font-family: Heebo;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #ff9916;
`

export const FormBreak = styled.hr`
    max-width: 400px;
    height: 2px;
    margin: 0px 0 5px 0px;
    border-radius: 1px;
    border: none;
    background-color:#ebebeb;
`

export const TextL = styled.a`
    margin: 0px 5px 0px 0;
    font-family: Heebo;
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: right;
    color: #9e9e9e;
    text-decoration: none;
`