
import styled from "styled-components";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const RightContainerdiv = styled.div`
  
    flex:3 ;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    
   
    height:120vh ;
    
    
    
`
const RightInnerContainerdiv = styled.div`
  
    max-width: 100% ;
    
    display:flex ;
    justify-content:center ;
  
    
    flex-direction:column ;
    
    
    
    
    
`




const UpperInfoPartDiv = styled.div`
    display:flex ;
    flex-direction: column;
    margin-top:20px ;
    margin-right:20px ;
    margin-left:20px ;
    width:100% ;
    height:100% ;
    padding: 20px 35px;
    border-radius: 25px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
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

const UpperInfoPartDivHeading = styled.h4`
    margin: 10px;
    font-size:18px ;
    font-weight: 400;

    color:black ;
    
  
  
`
const UpperInfoPartDivMainHeading = styled.h4`
    margin: 10px;
    font-size:22px ;
    font-weight: 600;

    color:#4d4d4d ; 
  
  
`
const UpperInfoPartDivHeadingDate = styled.h4`
 margin: 0px; 
 font-size:16px ;
    font-weight: 400;

    color:black ;
  
  
`

const UpperInfoPartDivHeadingDate2 = styled.h4`
 margin: 0px;  
 font-size:16px ;
    font-weight: 400;

    color:black ; 
  
  
`

const UpperInfoPartDivHeadingLower = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 30px 10px;   
margin-bottom: 0px;

    
`
const Referalcodecontainer = styled.div`
    display:flex ;
    flex-direction: row;
    justify-content: space-between;
    margin-top:20px ;
    margin-right:20px ;
    margin-left:20px ;
    width:100% ;
    height:100% ;
    padding: 20px 35px;
    border-radius: 25px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
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
const ReferalcodecontainerRightDiv = styled.div`

    border: 2px dashed #ff6600;
    border-radius: 5px;
    background-color: #fff0e6;
    color: #a6a6a6;
    font-weight: 400;
    width: 75%;
    


    
`
const Referalcodecontainerheading1 = styled.h4`
margin: 10px;
font-weight: 400;
    


    
`
const Referalcodecontainerheading2 = styled.h4`
margin: 10px;
font-weight: 400;
    


    
`



const ReferalcodecontainerLeftdiv = styled.div`
    border: 2px solid #009900;
    border-radius: 15px;
    color: #009900;
    
    background-color: #e6ffe6;


    
`

const Couponscontainer = styled.div`
    display:flex ;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top:20px ;
    margin-right:20px ;
    margin-left:20px ;
    width:100% ;
    height:100% ;
    padding: 10px 35px;
    border-radius: 25px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    background-color: rgb(228 203 255);
    color: rgb(125 35 224);

    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
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
const CouponscontainerHeading = styled.h4`
margin: 10px;
font-weight: 500;
font-size: 22px;
    


    
`
const CouponscontainerDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
    


    
`


const BillInfocontainer = styled.div`
    display:flex ;
    flex-direction: column;

    
    margin-top:20px ;
    margin-right:20px ;
    margin-left:20px ;
    width:100% ;
    height:100% ;
    padding: 10px 35px;
    border-radius: 25px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    

    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
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

const BillInfocontainerdiv = styled.div`
 width: 100%;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 padding: 5px;
    
`
const BillInfocontainerText = styled.div`
color: #8c8c8c;
    
`
const BillInfocontainerAmount = styled.div`
    color: #8c8c8c;
`

const Line = styled.div`
margin-top: 20px;
background-color: #8c8c8c;
height: 2px;
width: 100%;
    
`

const CompletePaymentButton = styled.div`
    display:flex ;
    flex-direction: column;
    cursor: pointer;
    background-color:rgb(125 35 210) ;
    text-align: center;
    color: white;
    font-size: 25px;

    
    margin-top:20px ;
    margin-right:20px ;
    margin-left:20px ;
    width:100% ;
    height:100% ;
    padding: 20px 35px;
    border-radius: 15px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    

    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
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






const RightContainer =()=>{
    return(
        <RightContainerdiv>
            <RightInnerContainerdiv>
            


            
                <UpperInfoPartDiv>
                    <UpperInfoPartDivHeading>XYZ Design Academy</UpperInfoPartDivHeading>
                    <UpperInfoPartDivMainHeading>
                        The Complete Digital Marketing Course

                    </UpperInfoPartDivMainHeading>
                    <UpperInfoPartDivHeadingLower>
                        <UpperInfoPartDivHeadingDate>3 Months</UpperInfoPartDivHeadingDate>
                        <UpperInfoPartDivHeadingDate2>Starting from: 12/03/22</UpperInfoPartDivHeadingDate2>


                    </UpperInfoPartDivHeadingLower>
                    


                </UpperInfoPartDiv>
                <Referalcodecontainer>
                    <ReferalcodecontainerRightDiv>
                        <Referalcodecontainerheading1>Type referral code here</Referalcodecontainerheading1>

                    </ReferalcodecontainerRightDiv>
                    <ReferalcodecontainerLeftdiv>
                        <Referalcodecontainerheading2>Redeem</Referalcodecontainerheading2>

                    </ReferalcodecontainerLeftdiv>

                </Referalcodecontainer>
                <Couponscontainer>
                    <CouponscontainerDiv>
                        <FileCopyIcon></FileCopyIcon>
                        <CouponscontainerHeading>Use coupons</CouponscontainerHeading>

                    </CouponscontainerDiv>
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                    

                </Couponscontainer>
                <BillInfocontainer>
                    <BillInfocontainerdiv>
                        <BillInfocontainerText>Amount</BillInfocontainerText>
                        <BillInfocontainerAmount>$ 64,240</BillInfocontainerAmount>

                    </BillInfocontainerdiv>
                    <BillInfocontainerdiv>
                        <BillInfocontainerText>Material cost</BillInfocontainerText>
                        <BillInfocontainerAmount>$ 64,240</BillInfocontainerAmount>

                    </BillInfocontainerdiv>
                    <BillInfocontainerdiv>
                        <BillInfocontainerText>GST</BillInfocontainerText>
                        <BillInfocontainerAmount>$ 64,240</BillInfocontainerAmount>

                    </BillInfocontainerdiv>
                    <BillInfocontainerdiv>
                        <BillInfocontainerText style={{ color:" rgb(125 35 210)" }}>Coupon</BillInfocontainerText>
                        <BillInfocontainerAmount style={{ color:" rgb(125 35 210)" }}>-$ 64,240</BillInfocontainerAmount>

                    </BillInfocontainerdiv>
                    <BillInfocontainerdiv>
                        <BillInfocontainerText style={{ color:" red" }} >Discount</BillInfocontainerText>
                        <BillInfocontainerAmount style={{ color:" red" }}>$ 12,400</BillInfocontainerAmount>

                    </BillInfocontainerdiv>
                    <Line></Line>
                    <BillInfocontainerdiv>
                        <BillInfocontainerText style={{ fontSize:"30px", color:"black" }} >Total</BillInfocontainerText>
                        <BillInfocontainerAmount style={{ fontSize:"30px", color:"black"  }} >$ 64,200</BillInfocontainerAmount>

                    </BillInfocontainerdiv>

                 
                 

                </BillInfocontainer>
                <CompletePaymentButton>
                    Complete Payment
                </CompletePaymentButton>
              
                
                
            

            </RightInnerContainerdiv>
        </RightContainerdiv>
    )
}
export default RightContainer;