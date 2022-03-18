import React from 'react'

import styled from "styled-components";

import LockIcon from '@material-ui/icons/Lock';
import Lock from '../img/Lock.png'

const MiddleContainerdiv = styled.div`
  
    flex: 6;
    display:flex ;
    align-items: flex-start;
    justify-content:center ;
    height:72vh ;
    width:100% ;
    margin-top:20px ;
    
    
    
    
`
const MiddleInnerContainerdiv = styled.div`
  
    
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
    height: 100%;
    width: 100%;
    
    box-shadow: 0px 0px 60px -35px #9d00de;
    box-shadow: 0px 5px 26px -20px #9d00de;
    

   
   
    
    
    
    
    
    
`
const MiddleFormPartDivHeading =styled.h4`
 padding-left: 25px;
 font-size: 16px;
 margin: 0px;
 font-weight: 400;


`



const MiddleFormPartDiv = styled.div`
    display:flex ;
    flex-direction: column;
    width: 100%;
    
    margin-right:20px ;
   
    
    
    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height:fit-content ;
    width: fit-content ;
    padding: 35px ;
    margin:auto ;
    margin-top:20px;
    }
  
  
`


const MiddleFormPartDivItem = styled.div`
margin: 20px;
width: 100%;
    
  
  
`
const MiddlePartFormInput = styled.input`



border: none;
background-color:#f2f2f2;
padding: 22px 22px;
margin: 5px;
border-radius: 10px;
width: 90%;
font-size: 18px;
color: #e8e7e8;
  
  
`
const MiddlePartInputContainer = styled.div`
display: flex;
flex-direction: row;

    
  
  
`
const MiddlePartFormInputMini = styled.input`
border: none;
background-color: #f2f2f2;
padding: 18px 12px;
margin: 5px;
border-radius: 10px;
width: 90%;
font-size: 18px;
color: #e8e7e8;
font-weight: 600px;


    
  
  
`
const MiddlePartCheckBoxContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-left:45px;
    


  
`




const MiddlePartCheckBoxHeading = styled.h4`
    font-size:20px ;
    font-weight: 400;
    
    color:black ;

  
`

const MiddlePartCheckBox = styled.input`
 height: 20px;
  width: 20px;
  margin: 10px;
  color: black;

  
`
const MiddlePartSecureContainer = styled.div`
display: flex;
width: 100%;
height: fit-content;
align-items: center;
justify-content: flex-end;
 

  
`
const MiddlePartSecureDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-right: 65px;

 

  
`
const MiddlePartSecureHeadingDiv = styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;



 

  
`
const MiddlePartSecureHeading = styled.h4`
font-size: 18px;

margin: 2px;
color: #8e9391;
font-weight: 300px;

  
`
const MiddlePartSecureHeading2 = styled.h4`
font-size: 18px;

margin: 2px;
color: #8e9391;
font-weight: 300px;

  
`
const MiddlePartSecureImg = styled.img`
height: 60px;
width: 60px;


  
`


function MiddleContainer() {
  return (
    <MiddleContainerdiv>
            <MiddleInnerContainerdiv>
            

            
                <MiddleFormPartDiv>

                    <MiddleFormPartDivItem>

                        <MiddleFormPartDivHeading>
                            Name on card

                        </MiddleFormPartDivHeading>
                    
                        <MiddlePartFormInput placeholder='   Name on card'>

                        </MiddlePartFormInput>

                    </MiddleFormPartDivItem>

                    <MiddleFormPartDivItem>

                        <MiddleFormPartDivHeading>
                            Card Number
                        </MiddleFormPartDivHeading>
                        <MiddlePartFormInput placeholder='   XXXX XXXX XXXX XXXX'>
                            
                        </MiddlePartFormInput>

                    </MiddleFormPartDivItem>
                    
                    
                    <MiddlePartInputContainer>
                        <MiddleFormPartDivItem>
                            <MiddleFormPartDivHeading>
                                Expiry Date

                            </MiddleFormPartDivHeading>
                            <MiddlePartFormInputMini placeholder='   MM/YY'>

                            </MiddlePartFormInputMini>
                        </MiddleFormPartDivItem>
                        <MiddleFormPartDivItem>
                            <MiddleFormPartDivHeading>
                                Security Code

                            </MiddleFormPartDivHeading>
                            <MiddlePartFormInputMini placeholder='   CVV/CVC'>

                            </MiddlePartFormInputMini>
                        </MiddleFormPartDivItem>
                        
                        


                    </MiddlePartInputContainer>
                    
                    
                    

                    


                </MiddleFormPartDiv>
                <MiddlePartCheckBoxContainer>

                    <MiddlePartCheckBox type="checkbox">

                    </MiddlePartCheckBox>
                    <MiddlePartCheckBoxHeading>
                        Remember this card

                    </MiddlePartCheckBoxHeading>

                </MiddlePartCheckBoxContainer>
                <MiddlePartSecureContainer>
                    <MiddlePartSecureDiv>
                        <MiddlePartSecureImg src={Lock}></MiddlePartSecureImg>
                        <MiddlePartSecureHeadingDiv>
                            <MiddlePartSecureHeading>Secure</MiddlePartSecureHeading>
                            <MiddlePartSecureHeading2>Connection</MiddlePartSecureHeading2>

                        </MiddlePartSecureHeadingDiv>
                        

                    </MiddlePartSecureDiv>
                </MiddlePartSecureContainer>
                
                
                


            </MiddleInnerContainerdiv>
        </MiddleContainerdiv>
  )
}

export default MiddleContainer;