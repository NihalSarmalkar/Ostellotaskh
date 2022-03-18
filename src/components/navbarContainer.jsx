import React from 'react'
import styled from "styled-components";
import Logo from '../img/Logo.png'

const Navbar = styled.div`
    display:flex ;
    
    align-items:center ;
    padding: 15px 100px ;
    justify-content: space-between;
    
    width:100% ;
    height: 55px;
    margin-bottom: 35px;


    color: grey;

 


    box-shadow: 0px 0px 60px -35px #9d00de;
    color: rgb(125 35 224); ;
    
    

    
`
const NavbarRight = styled.div`
margin-right: 155px;
border: 2px solid #b844e7;
padding: 8px 18px;
border-radius: 10px;

    
`
const NavbarLeft = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
margin-left: 155px;

    
`
const OstelloLogo = styled.img`
width: 80px;
height: 65px;



    
`

const OstelloText = styled.h4`
margin-left: 5px;
font-size: 35px;
color: #9d00de;
font-weight: 500;



    
`



function navbarContainer() {
  return (
    <Navbar>
        <NavbarLeft>
            <OstelloLogo src={Logo}></OstelloLogo>
            <OstelloText>OSTELLO</OstelloText>
            

        </NavbarLeft>
        <NavbarRight>
            Cancel
        </NavbarRight>

    </Navbar>
  )
}

export default navbarContainer