import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Nav = styled.nav`
    width: 100%;
    height: 60px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    overflow: hidden;;
`

export const NavbarLeftContainer = styled.div`
    display:flex;
    align-items: center;
    padding-left: 15px;
`

export const NavbarCenterContainer = styled.div`
    display:flex;
    align-items: center;
`

export const NavbarRightContainer = styled.div`
    display:flex;
    align-items: center;
    padding-right: 15px;
    justify-content: space-between;
`

export const NavIcon = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
`

export const NavLogo = styled(Link)`
    padding-top: 10px;
    padding-left: 5px;
    color: #011627;
    font-family: Heebo;
    font-size: 21px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    text-decoration: none;
`

export const NavSearch = styled.input`
    height: 35px;
    width: 600px;
    padding: 6.5px 8px 6.5px 8px;
    border-radius: 8px;
    border: solid 1px #eff2f6;
    &::placeholder {
        opacity: 0.5;
        font-family: Heebo;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.11;
        letter-spacing: normal;
        text-align: left;
        color: #515151;
  }
`

export const NavMenu = styled(Link)`
    height: 30px;
    color: #808a93;
    display: flex;
    padding: 5px;
    font-family: Heebo;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-decoration: none;
`