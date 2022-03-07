import styled from "styled-components";
import LeftContainer from "../components/leftContainer";
import RightContainer from "../components/rightContainer";

const HomeContainer = styled.div`
  display:flex ;
  width: 100%;
  height:100% ;
`;



const Dashboard = ()=>{
    return(
        <HomeContainer>

            <LeftContainer/>
            <RightContainer/>

        </HomeContainer>
      

           
  
        
    )
}

export default Dashboard;