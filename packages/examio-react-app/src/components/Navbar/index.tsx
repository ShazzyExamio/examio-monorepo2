import React from 'react'
import { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import { useLocation } from 'react-router-dom'
import { Nav, NavbarLeftContainer,NavbarCenterContainer,NavbarRightContainer, NavLogo, NavIcon, NavSearch, NavMenu } from './NavbarElements'
import { postRequest } from '../../services/network.service';


const Navbar: React.FC = () => {

  const [search, setSearch] = useState('');
  
  let showSidebar = true;
  let location = useLocation();
  if (location.pathname == '/login'){showSidebar = false}

  const handleSearch = async () =>{
    
    let path = '/search/data';
    let data = { query: search};
    let headers = {
      Authorization: 'Bearer ' + sessionStorage.getItem('token')
    }
    let results = await postRequest(path,data,headers);
    console.log(results);
  }

  return (
    <>
    <Nav>
        <NavbarLeftContainer>
            <NavIcon><img src='./examio-logo.png'/></NavIcon>
            <NavLogo to='/'>examio</NavLogo>
        </NavbarLeftContainer>
        <NavbarCenterContainer>
            <NavSearch type='text' id='search' placeholder='Suche nach Themen' onChange={e => setSearch(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSearch()}/>
        </NavbarCenterContainer>
        <NavbarRightContainer>
            <NavMenu to='/merkliste'>Merkliste</NavMenu>
            <NavMenu to='/benachrichtigung'>Benachrichtigung</NavMenu>
            { global.firstName ? <NavMenu to='/profile'>{global.firstName}</NavMenu>  : <NavMenu to='/login'>Login</NavMenu> }
        </NavbarRightContainer>
    </Nav>
    { showSidebar ? <Sidebar/> : ''}
    </>
  )
}

export default Navbar