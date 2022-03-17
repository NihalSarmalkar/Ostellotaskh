import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import styled from "styled-components";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import EuroIcon from '@material-ui/icons/Euro';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

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
    
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);

   
   
    
    
    
    
    
    
`
const MiddleFormPartDivHeading =styled.h4`
 padding-left: 25px;
 font-size: 15px;
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
padding: 18px 12px;
margin: 5px;
border-radius: 10px;
width: 90%;
  
  
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


function MiddleContainer() {
  return (
    <MiddleContainerdiv>
            <MiddleInnerContainerdiv>
            

            
                <MiddleFormPartDiv>

                    <MiddleFormPartDivItem>

                        <MiddleFormPartDivHeading>
                            Name on card

                        </MiddleFormPartDivHeading>
                    
                        <MiddlePartFormInput placeholder='  Name on card'>

                        </MiddlePartFormInput>

                    </MiddleFormPartDivItem>

                    <MiddleFormPartDivItem>

                        <MiddleFormPartDivHeading>
                            Card Number
                        </MiddleFormPartDivHeading>
                        <MiddlePartFormInput placeholder='  XXXX XXXX XXXX XXXX'>
                            
                        </MiddlePartFormInput>

                    </MiddleFormPartDivItem>
                    
                    
                    <MiddlePartInputContainer>
                        <MiddleFormPartDivItem>
                            <MiddleFormPartDivHeading>
                                Expiry Date

                            </MiddleFormPartDivHeading>
                            <MiddlePartFormInputMini placeholder='  MM?YY'>

                            </MiddlePartFormInputMini>
                        </MiddleFormPartDivItem>
                        <MiddleFormPartDivItem>
                            <MiddleFormPartDivHeading>
                                Security Code

                            </MiddleFormPartDivHeading>
                            <MiddlePartFormInputMini>

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
                
                
                


            </MiddleInnerContainerdiv>
        </MiddleContainerdiv>
  )
}

export default MiddleContainer;