import styled from "styled-components";
import {
    Chat,
    Dashboard,
    
   
    
  } from "@material-ui/icons";
  import NotificationsIcon from '@material-ui/icons/Notifications';
  import AssessmentIcon from '@material-ui/icons/Assessment';
  import TimelineIcon from '@material-ui/icons/Timeline';
  import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const LeftContainerdiv = styled.div`
    flex:1.5 ;
    
    height:100vh ;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(54, 45, 45, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
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

const ItemList2 = styled.div`
    display:flex ;
    justify-content: center ;
    align-items:center ;
    margin-top: 350px ;
   
    flex-direction: column ;
    
    
`

const ItemComponent = styled.div`
    display:flex ;
    justify-content: center ;
    align-items:center ;
    padding: 10px ;
    
    width:80px ;
    height:80px ;
    margin:10px ;
    color: grey;
    flex-direction: column ;
    &:hover {
        -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
        box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
        color: #1976d2 ;
    }

    
`

const ItemComponentHeading = styled.h2`
    font-size:10px ;
`

const LeftContainer =()=>{
    return(
        <LeftContainerdiv>
            <ItemList>
                <ItemComponent>
                 <Dashboard style={{ fontSize: 40}} />
                 <ItemComponentHeading>
                     Dashboard
                 </ItemComponentHeading>
                </ItemComponent>

                <ItemComponent>
                 <TimelineIcon style={{ fontSize: 40}}/>
                 <ItemComponentHeading>
                     Trading
                 </ItemComponentHeading>  
                </ItemComponent>

                <ItemComponent>
                 <NotificationsIcon style={{ fontSize: 40}}/>
                 <ItemComponentHeading>
                     Notifications
                 </ItemComponentHeading>
                </ItemComponent>

                <ItemComponent>
                 <AssessmentIcon style={{ fontSize: 40}}/>
                 <ItemComponentHeading>
                     Analytics
                 </ItemComponentHeading>
                </ItemComponent>

            </ItemList>
            <ItemList2>
                
                <ItemComponent>
                 <ExitToAppIcon style={{ fontSize: 40}}/>
                 <ItemComponentHeading>
                     Analytics
                 </ItemComponentHeading>
                </ItemComponent>

            </ItemList2>
        </LeftContainerdiv>
    )
}
export default LeftContainer;