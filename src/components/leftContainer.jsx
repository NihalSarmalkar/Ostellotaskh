import styled from "styled-components";
import {
    Chat,
    Dashboard,
    
   
    
  } from "@material-ui/icons";
  import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
  import CreditCardIcon from '@material-ui/icons/CreditCard';
  import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
  import EventIcon from '@material-ui/icons/Event';
  import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const LeftContainerdiv = styled.div`
    flex:3 ;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    
    height:120vh ;
    /* -webkit-box-shadow: 0px 0px 16px -8px rgba(54, 45, 45, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68); */
    @media (max-width: 768px) {
        height:115vh ;
    }
`
const ItemList = styled.div`
    display:flex ;
    justify-content: center ;
    align-items:center ;
   
    flex-direction: column ;
    
    
`



const ItemComponent = styled.div`
    display:flex ;
    
    align-items:center ;
    padding: 15px 50px ;
    
    width:200px ;

    margin:12px ;
    color: grey;

    border-radius: 15px;

    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    color: rgb(125 35 224); ;
    &:hover{
        color: white ;
        background-color: rgb(125 35 210);
        

    }
    

    
`

const ItemComponentHeading = styled.h2`
    font-size:18px ;
    font-weight: 500;
    padding-left: 25px;
    color:black ;
    width:100%;
    height: 100%;
    &:hover{
        color: white ;
        
        

    }

`

const LeftContainer =()=>{
    return(
        <LeftContainerdiv>
            <ItemList>
                <ItemComponent>
                 <CreditCardIcon style={{ fontSize: 40}} />
                 <ItemComponentHeading>
                     Card
                 </ItemComponentHeading>
                </ItemComponent>

                <ItemComponent>
                 <CreditCardIcon style={{ fontSize: 40}}/>
                 <ItemComponentHeading>
                     UPI
                 </ItemComponentHeading>  
                </ItemComponent>

                <ItemComponent>
                 <CreditCardIcon style={{ fontSize: 40}}/>
                 <ItemComponentHeading>
                     PayTM
                 </ItemComponentHeading>
                </ItemComponent>

                <ItemComponent>
                 <AccountBalanceIcon style={{ fontSize: 40}}/>
                 <ItemComponentHeading>
                     Net Banking
                 </ItemComponentHeading>
                </ItemComponent>
                <ItemComponent>
                 <AccountBalanceWalletIcon style={{ fontSize: 40}}/>
                 <ItemComponentHeading>
                     Mobile Wallets
                 </ItemComponentHeading>
                </ItemComponent>
                <ItemComponent>
                 <EventIcon style={{ fontSize: 40}}/>
                 <ItemComponentHeading>
                     EMI
                 </ItemComponentHeading>
                </ItemComponent>
                <ItemComponent>
                 <AttachMoneyIcon style={{ fontSize: 40}}/>
                 <ItemComponentHeading>
                     No-cost loan
                 </ItemComponentHeading>
                </ItemComponent>
               

            </ItemList>
            
        </LeftContainerdiv>
    )
}
export default LeftContainer;