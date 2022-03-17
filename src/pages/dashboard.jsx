import styled from "styled-components";
import LeftContainer from "../components/leftContainer";
import RightContainer from "../components/rightContainer";
import MiddleContainer from "../components/middleContainer";
import NavbarContainer from "../components/navbarContainer";

const HomeContainer = styled.div`
  display:flex ;
  width: 100%;
  margin: auto;
  justify-content: center;

  
  height:100% ;
`

const DashboardContainer = styled.div`
  display:flex ;
  width: 80%;
  margin: auto;
  flex-direction: column;
  
  height:100% ;
`

const HomeContainerHeading = styled.h4`
    margin:12px ;
    margin-left: 35px;
    font-size: 28px;
    color: #4d4d4d;

  
`



const Dashboard = ()=>{
    return(
        <>
        <NavbarContainer></NavbarContainer>
        <DashboardContainer>
            <HomeContainerHeading>Choose a payment method</HomeContainerHeading>
            <HomeContainer>
                

                <LeftContainer/>
                <MiddleContainer/>
                <RightContainer/>

            </HomeContainer>
        </DashboardContainer>
        
        

        </>
       
        

           
  
        
    )
}

export default Dashboard;