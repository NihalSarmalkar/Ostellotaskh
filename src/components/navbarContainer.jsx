import React from 'react'
import styled from "styled-components";

const Navbar = styled.div`
    display:flex ;
    
    align-items:center ;
    padding: 15px 100px ;
    justify-content: space-between;
    
    width:100% ;
    height: 55px;
    margin-bottom: 35px;


    color: grey;

 

    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    color: rgb(125 35 224); ;
    
    

    
`
const NavbarRight = styled.div`
margin-right: 155px;
border: 2px solid rgb(125 35 224);
padding: 8px 18px;
border-radius: 10px;

    
`
const NavbarLeft = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
margin-left: 55px;

    
`
const OstelloLogo = styled.img`
width: 75px;
height: 75px;
border-radius:50%;


    
`

const OstelloText = styled.h4`
margin-left: 15px;
font-size: 25px;



    
`



function navbarContainer() {
  return (
    <Navbar>
        <NavbarLeft>
            <OstelloLogo src='https://media-exp1.licdn.com/dms/image/C560BAQFETL1_-6F-KA/company-logo_200_200/0/1599065648546?e=1655337600&v=beta&t=nj4bKSMRMhywv6yU8TM_OT6snXXpOdbY31jFK9xDAn0
'></OstelloLogo>
            <OstelloText>OSTELLO</OstelloText>
            

        </NavbarLeft>
        <NavbarRight>
            Cancel
        </NavbarRight>

    </Navbar>
  )
}

export default navbarContainer