import styled from 'styled-components'
import {Link} from 'react-router-dom'



export const SidebarMenu = styled.div`
    
    background-color: #fff;
    height: 100%;
        width: 192px;
        position: fixed;
`

export const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 50px;
    padding-top: 10px;
`

export const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 14px;
    text-decoration: none;
    color: #808a93;

    &:hover {
        border-radius: 8px;
        background-color: #f8f9fb;
        width: 100%;
        height: 45px;
        color: #011627;
    }
`
