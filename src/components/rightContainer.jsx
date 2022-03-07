import ProgressBar from "@ramonak/react-progress-bar";
import styled from "styled-components";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import EuroIcon from '@material-ui/icons/Euro';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const RightContainerdiv = styled.div`
  
    flex:11.5 ;
    
    height:100% ;
    height:100vh;
    
    
    
`
const RightInnerContainerdiv = styled.div`
  
    max-width: 80% ;
    margin:auto ;
    display:flex ;
    justify-content:center ;
    flex-direction:column ;
    
    
    
    
    
`


const UpperPartDiv = styled.div`
    display:flex ;
    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    }
    
        
`

const UpperPartHeadingContainer = styled.h2`
    display:flex ;
    flex: 8 ;
    flex-direction:column ;
    
 
    
        
`



const UpperPartHeading = styled.h2`
    font-size:30px ;
    font-weight: normal;
    
        
`

const UpperPartSubHeading = styled.h4`
    font-size:15px ;
    color:grey ;
        
`

const UpperPartButton = styled.button`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius:10px ;
    margin-right: 25px;
    &:hover {
        cursor: pointer;
        
    }
    @media (max-width: 768px) {
        margin-right: 0px;
        width:100% ;
        margin-top:15px ;
    
    }
    

        
`

const UpperPartInfo = styled.div`
    flex: 4 ;
    display:flex ;
    align-items:center ;
    flex-direction:row-reverse ;
    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content:center ;
    
    }

  
    
        
`

const TeamMemberInfo = styled.div`
    flex: 4 ;
    display:flex ;
    
  
    
        
`
const TeamMemberInfoRight = styled.div`
padding:0px 15px ;

border-radius:25px ;
margin:auto ;
text-align:center ;
background-color: rgba(255, 0, 0, 0.2);
color:rgba(255, 0, 0);
    
    
  
    
        
`
const TeamMemberInfoRightHeading = styled.h4`
    font-size:10px ;
    
  
    
        
`

const UpperPartInfoAvatar = styled.div`
    width:70px ;
    height:70px ;
    border-radius:50% ;
        
`
const UpperPartInfoAvatarImg = styled.img`
    width:70px ;
    height:70px ;
    object-fit:cover ;
    border-radius:50% ;
    @media (max-width: 768px) {
    
    }
        
`

const UpperPartInfoName = styled.h4`
    font-size:15px ;
    margin-left: 15px;
    
        
`

const NumericalPartDiv = styled.div`
    display: flex ;
    justify-content:space-between ;
    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    }

  
   
    
`

const NumericalPartItemDiv = styled.div`
    display: flex ;
    flex-direction:column ;
    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    }
    

  
   
    
`

const NumericalPartItemCurrencyDiv = styled.div`
    display: flex ;
    justify-content:space-evenly ;
    
    

  
   
    
`
const NumericalPartItemName = styled.h2`
    font-weight: normal;
    

  
   
    
`
const NumericalPartItemCount = styled.h4`
    font-weight: normal;
    margin:5px ;
    font-size:30px ;
 
`

const NumericalPartItemCountPercent = styled.h4`
    font-weight: normal;
    font-size:15px ;
    color:#4CAF50 ;
 
`

const NumericalPartItemCountDiv = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: center ;   
    
`

const NumericalPartItemBarDiv = styled.div`
    width:4px ;
    height:125px ;
    
    background-color:#e7e7e7 ;
    @media (max-width: 768px) {
    display: none;
    }

  
   
    
`

const GraphPartDiv = styled.div`
    display:flex ;
    justify-content: space-evenly;
    margin-top:50px ;
    margin-right:20px ;
    margin-left:20px ;
    width:100% ;
    height:20vh ;
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
const GraphPartItemDiv = styled.div`

    
  
  
`

const GraphPartItemHeading = styled.h4`
    font-size: 15px;
    color: grey;
    text-align:center ;
    
    
  
  
`
const GraphPartItemInfo = styled.div`
    display:flex ;
    align-items: center ;
    justify-content:center;
    
  
  
`

const GraphPartItemInfoNumber = styled.h4`

    font-size: 30px;
    font-weight:normal ;
    margin:0px ;
    
  
  
`


const BottomPartDiv = styled.div`
    margin-top:15px ;
    display:flex ;
    align-items:center ;
    margin-left:45px ;
    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content:center ;
    
    }
    
    
    
  

    
    
`
const BottomPartDivHeading = styled.div`
    font-weight:normal ;
    font-size:25px ;    
`

const BottomPartDivViewAll = styled.div`
    font-weight:normal ;
    padding-top:10px ;
    font-size:15px ;
    color   :blue ;
`


const TeamMembersDiv = styled.div`
    flex:6 ;
    height:30vh ;
   

    
    
`
const TeamMembersItemsDiv = styled.div`
   
   
    margin-bottom:8px ;
    display:flex ;
    padding:6px ;
    justify-content:space-between ;
   
    
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  

    
    
`
const TeamMembersHeadingDiv = styled.div`
    flex:6 ;
    display:flex;
    justify-content:space-between ;
    @media (max-width: 768px) {
    display:none ;
    
    }
    
    
`

const TeamMembersHeadingPhoneDiv = styled.div`
    flex:6 ;
    display:flex;
    display:none ;
    justify-content:space-between ;
    @media (max-width: 768px) {
    display:block ;
    margin:auto ;
    
    }
    
    
`


const ComparisonHeadingPhoneDiv = styled.div`
    flex:6 ;
    display:flex;
    justify-content:space-between ;
    display: none ;
    @media (max-width: 768px) {
    display:block ;
    margin:25px ;
    
    }
    
    
`




const ComparisonDiv = styled.div`
    flex:6 ;
    height:30vh ;
    margin-left:15px ;
    padding-right: 12px;
    padding-left: 12px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  
    
    
    
`
const ComparisonItemDiv = styled.div`

    

    
`
const ComparisonItemInfoDiv = styled.div`

    display:flex ;
    align-items: center ;
    
    

    
`

const ComparisonItemInfoFlagImg = styled.img`

    width: 35px ;
    height: 35px;
    margin:15px ;

    
    

    
`
const ComparisonItemInfoHeading = styled.h4`

    
    margin:15px ;

    
`


const ComparisonHeadingDiv = styled.div`
    flex:6 ;
    display:flex;
    justify-content:space-between ;

    margin-left:20px ;
    @media (max-width: 768px) {
    display:none ;
    
    }
    
  
    
    
    
`




const RightContainer =()=>{
    return(
        <RightContainerdiv>
            <RightInnerContainerdiv>
            <UpperPartDiv>
                <UpperPartHeadingContainer>
                    <UpperPartHeading>
                        Dashboard
                    </UpperPartHeading>
                    <UpperPartSubHeading>
                        Welcome back Andrew
                    </UpperPartSubHeading>

                </UpperPartHeadingContainer>
                
                <UpperPartInfo>
                    
                    
                    <UpperPartInfoName>
                        Andrew Johnstons
                    </UpperPartInfoName>
                    <UpperPartInfoAvatar>
                        <UpperPartInfoAvatarImg src="data:image/jpeg;base64,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" alt="" />

                    </UpperPartInfoAvatar>
                    <UpperPartButton>
                        + Follow
                    </UpperPartButton>

                </UpperPartInfo>
            </UpperPartDiv>


            <NumericalPartDiv>
                <NumericalPartItemDiv>
                    <NumericalPartItemName>Balances</NumericalPartItemName>

                    <NumericalPartItemCount>$5999.00</NumericalPartItemCount>

                </NumericalPartItemDiv>

                <NumericalPartItemBarDiv></NumericalPartItemBarDiv>

                <NumericalPartItemDiv>
                    <NumericalPartItemName>Profits</NumericalPartItemName>
                    <NumericalPartItemCountDiv>
                        <NumericalPartItemCount>$99.00</NumericalPartItemCount>
                        <NumericalPartItemCountPercent>32%</NumericalPartItemCountPercent>
                        <ArrowDropUpIcon style={{ color:" #00be00" }} ></ArrowDropUpIcon>

                    </NumericalPartItemCountDiv>
                    
                    
                </NumericalPartItemDiv>

                <NumericalPartItemBarDiv></NumericalPartItemBarDiv>

                <NumericalPartItemDiv>
                    <NumericalPartItemName>Losses</NumericalPartItemName>
                    <NumericalPartItemCountDiv>
                        <NumericalPartItemCount>$4199.00</NumericalPartItemCount>
                        <NumericalPartItemCountPercent style={{ color:" #dd0c28" }}>16%</NumericalPartItemCountPercent>
                        <ArrowDropDownIcon color="secondary" ></ArrowDropDownIcon>

                    </NumericalPartItemCountDiv>
                    

                    
                </NumericalPartItemDiv>

                <NumericalPartItemBarDiv></NumericalPartItemBarDiv>

                <NumericalPartItemDiv>
                    <NumericalPartItemName>Currency</NumericalPartItemName>
                    <NumericalPartItemCurrencyDiv>
                        <AttachMoneyIcon></AttachMoneyIcon>
                        <EuroIcon></EuroIcon>

                    </NumericalPartItemCurrencyDiv>
                    

                    
                </NumericalPartItemDiv>
                
            
            </NumericalPartDiv>
            <GraphPartDiv>
                <GraphPartItemDiv>
                    <GraphPartItemHeading>Italy</GraphPartItemHeading>
                    <GraphPartItemInfo>
                        <GraphPartItemInfoNumber>432</GraphPartItemInfoNumber>
                        <ArrowDropUpIcon style={{ color:" #00be00" }}></ArrowDropUpIcon>
                    </GraphPartItemInfo>

                </GraphPartItemDiv>
                <GraphPartItemDiv>
                    <GraphPartItemHeading>United State</GraphPartItemHeading>
                    <GraphPartItemInfo>
                        <GraphPartItemInfoNumber>231</GraphPartItemInfoNumber>
                        <ArrowDropUpIcon style={{ color:" #00be00" }}></ArrowDropUpIcon>
                    </GraphPartItemInfo>

                </GraphPartItemDiv>
                <GraphPartItemDiv>
                    <GraphPartItemHeading>Canada</GraphPartItemHeading>
                    <GraphPartItemInfo>
                        <GraphPartItemInfoNumber>432</GraphPartItemInfoNumber>
                        <ArrowDropDownIcon color="secondary" ></ArrowDropDownIcon>
                    </GraphPartItemInfo>
                    
                </GraphPartItemDiv>
                <GraphPartItemDiv>
                    <GraphPartItemHeading>Spain</GraphPartItemHeading>
                    <GraphPartItemInfo>
                        <GraphPartItemInfoNumber>132</GraphPartItemInfoNumber>
                        <ArrowDropUpIcon style={{ color:" #00be00" }} ></ArrowDropUpIcon>
                    </GraphPartItemInfo>
                    
                </GraphPartItemDiv>
                <GraphPartItemDiv>
                    <GraphPartItemHeading>Japan</GraphPartItemHeading>
                    <GraphPartItemInfo>
                        <GraphPartItemInfoNumber>342</GraphPartItemInfoNumber>
                        <ArrowDropDownIcon color="secondary" ></ArrowDropDownIcon>
                    </GraphPartItemInfo>
                    
                </GraphPartItemDiv>
                <GraphPartItemDiv>
                    <GraphPartItemHeading>South Africa</GraphPartItemHeading>
                    <GraphPartItemInfo>
                        <GraphPartItemInfoNumber>475</GraphPartItemInfoNumber>
                        <ArrowDropUpIcon style={{ color:" #00be00" }} ></ArrowDropUpIcon>
                    </GraphPartItemInfo>
                    
                </GraphPartItemDiv>


            </GraphPartDiv>
            <BottomPartDiv>
                <TeamMembersHeadingDiv>
                    <BottomPartDivHeading>Team Member</BottomPartDivHeading>
                    <BottomPartDivViewAll>View All</BottomPartDivViewAll>

                </TeamMembersHeadingDiv>
                <ComparisonHeadingDiv>
                    <BottomPartDivHeading>Comparison</BottomPartDivHeading>
                    <BottomPartDivViewAll>View All</BottomPartDivViewAll>

                </ComparisonHeadingDiv>

            </BottomPartDiv>
            <TeamMembersHeadingPhoneDiv>
                    <BottomPartDivHeading>Team Member</BottomPartDivHeading>
                    <BottomPartDivViewAll>View All</BottomPartDivViewAll>

            </TeamMembersHeadingPhoneDiv>
            <BottomPartDiv>
                <TeamMembersDiv>
                    <TeamMembersItemsDiv>
                        <TeamMemberInfo>
                            <UpperPartInfoAvatar>
                                <UpperPartInfoAvatarImg src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDxAQDw8PEBAPEA8QEBAPDw8QFRAPFRUWFhUSFRcYHSggGBolGxcVIjEiJSktLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGi8mICUrKy0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0vKy0tLS0tLS0tLS0rLS0tLS0tLS0rLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQIFAwQGBwj/xAA7EAACAQIEAwUECAYCAwAAAAAAAQIDEQQSITEFQVEGYXGBoRMiMpEHQnKxwdHh8BQjM1Ji8XOyJENE/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECBAMF/8QAIxEBAQACAwABBAMBAAAAAAAAAAECEQMhMRIiQVGBBDKRE//aAAwDAQACEQMRAD8A+0AAAAAAAAAAAAAABAABAAJOSSbbSS3b0SOjU4xh4/8AtUvsXl6rQi2RMlrvA0eI7U0IbRqS71FJfNs0PEfpCUXlpU4Jp2ftXK/yVl6kfOJ+Fe6B82o/STWjL+bh6NSHWlKpCVu5Sun5M9Pwntng8So5ZuDkr2mvxV0T8oXGvRoETKSqFIVAAABQQoAAAAABQQoEBQBAAAAAAAAAAAAIAAAA0vaPtHQwEE6rbnJNwpxtdpc3fZd5uT4b2tq+341iISd3TTScrvKoxWWMeSit3fdyZXK6Wxm3d452rxFeWeX9J6wjCTSiuV1s33vc0k+KVWruUpq9nG9l3r4dH3Ox3oYeKglFLK041KenutveP+N+XRp970+Nn7KScW7PS2/k+jXz8dnx+Pbv8umdfGyWVwqyWmqko+6+V7cn1ujrYytnV3ZPLqtfFWfR2lbo1c6OLruVTNZaKzVrRrQtq7rRO3Pn5O/HTquKs25JXSfWLtrfwUn4sup65IVXZ6u7au+qVrStyavF+fcc1GtOF5p2aeqi7WldPMul1r5M1sMQ4pq3Nel7peP4HYhLO+dprV2ekrSV/lJ/JEofYfo37Uusv4atLNJX9nJ7u2rT8mvO59APzh2Yx7oV6UpNwkp0nmvz9+/lex+isLWjUhGcXeMkmnsWxv2VyjmABZRQEABUQAUAAAAAAAFBAAAAAAgFBABQAAIAAAAEZ8Pr8LniOK4qrGSi86abzaNNK2m1kk/NeX3E8HguFqFeo3mTnUm3rssz/Q55unG4qHAs6ztq71TUcl1ydr6P5HVxnZCNS7tFXVm7bro1sz1sDnilzOEtrVqT7Pmk/o/1upWtt89uenmc8ew0VZTkpW5228D39Vo4Ky5kXf5Xxs/DxS7H0ILSN9N5O7scEuB0qXwxR6+o00aPiD6HK11kn4eQ43wiMoOUEs0dVvrz/U9T9FXHK0aksDiJ5lZzpOVl717yiut9/ma/ER/E13CouGMpSileFaGW/TpfzaOvFnrpw5+OXt9xKRFNjAqAQAAAChEAFBABQQAUAACAAAAAAAAAAAAAAAA0WOp5Zyl1/PY3pqOKPXxf3nPk/q6cX9nUpyOzFvuNbi8dTw8c1R6cktW30RpKvbCUE3LB12vq5Yyfz00M2LZlHp60ebRxvXl0PP4HthTrtRlSqUpPbNHT5m4hibO/J6XFs2mS6YV4uN13GhxSk5dx0e0fax024UYOck2m2tDy9PjGOxDtGdCDeyzwv8rtlPjvteZa6ehxUXc7nZ/Ap4uMZatODfjujz2GxWKpzhHEwjOLaWeG6vbVo9JLHxwtZ1rOWSEXk2zNSaS7rsthNVXk+qaj6gU0XY7iVbE4b2mIcXU9pNNRjlUFo1DyTRvUbZdzbz8sbjdVUCFJVAAAAAAAAAQoAAAAAAAAAAAAAAAAAAAcdempxlF7STR52m7QjF7qVrb21fpuelPI42co49Q1yv2knrpqr3t8jhzdav6av40+W8f3/i8Rw6fvuLnKC91K2/Q85xPCYuthpzdR0arc4xoU1FKK+rKU7OU+ezW68T2jkcValmVkcp1Xa9zTwfZ/h841UoVasouLdRVbSSeZ2S8vX09fxbTDuy95R0O1QwUYapavmdLtFf8Ah5W/aK2eryy2R8gqUqlWtJTemezTeuW+60N5i+EwdWOVYiNCMdY55Nyd09bOy0TStZa3EaKU1K2vM9Bh6cGtV5XInJYnLimXrz3DJVU3Co5SinenJtNxXKLa7vuNhx/FQpwp15Jtuail0m07N9ys2bDE0Yr4VY03aX+Zg1SSvOrXhCn3SSbbfRWfqRLura1p7v6LtcJVnmcozrvLfWzjCEX9yPZo819HvCXhOHUacneUs1WT+27q3lY9IbsJrGPO5rvktUqICzkoAAAAAQAACFAAACgAAAAAAAAAAAGAIAANbxfAxnarb36fNb2/fobIEZYzKaq2Gdxu40EHc5kjhxEck5razbt3ftj2t/Ixzq6bfZuJ7dXfJLmzp8YqR9nbe6f6HW4rjaPs5U3FVLp3jbTqeJ4xj8VdUYtWlGTgqUXeFm1ZW3V16C/heanbrY+SgpNSWaEk7XTer2aNzgK2empLR22PBU+G4mjUvUhVlZ/WUnq+sup6fhvE8vuzhKF9L2uk9tSmWOvHTHPfs021fEaa7my4LwKeL/h3fLTpVJVar0vZ2Sgl1eVmixDzWW0s2VrvPpHZCko0H9q3yS/Mtw4/LLtz587hj03iVtigG95qgAgCkAFIUgAhSAAAAAAGQBAKQACggAoIAKQAAAAAAA0/GqdpKfKSs/Ffv0NLjZS9lLLbNpZO+/fbxPQcdjenH7a16aM85iZZYPM/eafvLT/Rk5Z9TbxX6GuwXC6ijmnVhnbb0pq0VySvv5nDjqFRf/Wo3v8ACkmlq7bnfo1Hs/eg7q7tfque2houMdno1aicZSs9bN7Pqv3uV8d8c9TppeIYSN3/AORUfhUSb7/dsa6NOnTqQleTTklLNKTzPvubetwdUG80cz11l7qs+40lb+oo5tcy2ytRV9dfn6id1HJnvt6nCxTrSf1Vapre17JLfwufUOCUPZ4emucoqb8Za/p5HxmpxFTqKFNWg53nJP49rJf46aeJ9s4c/wCRR/4qf/VHXgklrP8AyLdR2QQppZFQCBAAAAAABACQBAQAAAyAAAAAAAAAAAAAAAAAOvxCu6VGpVUc7hByjG9s0uSvyV7ajwk24uLr+U+5xfrb8TQSpqaakrp+HMyWIrTV6s82t8sVljHuS/O7InZ7GPPOZZbjfx4XHHVaurhJ021FOUVopa3Ud3fe7v8AvmaniOOs4ZZOySzSu1dc0uj/AEPUzel7vueum55/tBhozpp2WZJrx79tSLZrtMxu+mu4ljoyi5Si01HRPVt3SenT8zyGOqtt5dE7xs+a5af6NrWp67LKrbJXcr3f5HWlhm3mSsk9E9fNtj5SLf8AO31wcNg4yg3bRr9/ee5n9I1TC1HSlh41adLLH3JOM3BRVmr6N92h5GjBrfv2Olj05Tuk3KWWKS1beiSXeMc7L0nPjmU1X3rg/FKWLoUq9FtwrRU4qStK3RrqjvHmuzvDXhsJQoP4qdOKlb+96yt5tm6pYlrSWq68zbHm313AYQqJ7MzCAAAACACFISAAIAAAZAAAAAAAAAAAAABUiqJnYCRiWpTUouMldSTi13MqKB5XE0nTlKEt1s/7o8pI4ZR5np8dgoVo2lo18MlvF/l3GhxmBqUt1mj/AHR28+hlz47PPG3j5Zl1fXTVrNM1nEKalp1R3a09LnQqzUuZwtaZPu83jsIlpzuKlFRivA3NTCptvdLU1dSjWrT9nh6U6sr65FpHxk9I+bK6tunTck21ktLs9H2H7MynVWMrxtCLvh4P68rf1Wui5dXryV9zwHsSo2qYxxqS3VGN3CL/AMn9fw28T2GWxr4uKzvJh5+eXrFxZbGMYHK194SNLGx9mckJNfqZxjoMoGSlcphlF2u9AZgkZXAAAAACMCggAzAIQKCAkUEAFBDKEQCVzNRsZAgACXAoCABMpiLgdXE8Mo1PiprXnG8X6GrfZPDXvesu72l16o3rZLlbhjfYvOTOeVraHAcNBWVPN9uUpej0O7ToRirRjGMVtGKUUvJHLcjJmMnkRcrl7WD0MXEzsQsq42jFo5GiSX3AZwRk0SHI5LAcdhYyaLyA6842EJ3M914nWk7O4HZBhCVzIAwRgCggAzAIBQQAUEAGSVzmSMKSM76kAA2S4C4IioChgxbAAhSRACALApGBCMpAI0RrUyIA5eByQd0YdSYd6AckOZhWeWDLTerOLiLtBd8or1A5IbeCOtUXuJ99zmqu0PHRGOIVqaXgBwKeW3qdi50pO68TsUZXQHKQACgxuUCpluAAuLgALhFAHYRFv5AEDGbLHYAkSJmwCBhe5CgkEGwAJcjYAFTDAAxYuQAUgABM44yyya6gAZ03qzj4l8Mftx/EAgKutSMeizP8DHiU/dsQEjrJ6I5MNLcADnuGwAMcxAAP/9k=" alt="" />

                            </UpperPartInfoAvatar>
                        
                        
                            <UpperPartInfoName>
                                Andrew Johnstons
                            </UpperPartInfoName>
                            
                        
                        </TeamMemberInfo>
                        <TeamMemberInfoRight>
                            <TeamMemberInfoRightHeading>
                                Top Trader
                            </TeamMemberInfoRightHeading>

                        </TeamMemberInfoRight>
                    </TeamMembersItemsDiv>
                    <TeamMembersItemsDiv>
                        <TeamMemberInfo>
                            <UpperPartInfoAvatar>
                                <UpperPartInfoAvatarImg src="data:image/jpeg;base64,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" alt="" />

                            </UpperPartInfoAvatar>
                        
                        
                            <UpperPartInfoName>
                                Andrew Johnstons
                            </UpperPartInfoName>

                            
                    
                        </TeamMemberInfo>
                        <TeamMemberInfoRight>
                            <TeamMemberInfoRightHeading>
                                Manger
                            </TeamMemberInfoRightHeading>

                        </TeamMemberInfoRight>
                    </TeamMembersItemsDiv>
                    <TeamMembersItemsDiv>
                        <TeamMemberInfo>
                            <UpperPartInfoAvatar>
                                <UpperPartInfoAvatarImg src="data:image/jpeg;base64,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" alt="" />

                            </UpperPartInfoAvatar>
                        
                        
                            <UpperPartInfoName>
                                Andrew Johnstons
                            </UpperPartInfoName>
                            
                    
                        </TeamMemberInfo>
                        <TeamMemberInfoRight>
                            <TeamMemberInfoRightHeading>
                                Top Trader
                            </TeamMemberInfoRightHeading>

                        </TeamMemberInfoRight>
                    </TeamMembersItemsDiv>
                    <TeamMembersItemsDiv>
                        <TeamMemberInfo>
                            <UpperPartInfoAvatar>
                                <UpperPartInfoAvatarImg src="data:image/jpeg;base64,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" alt="" />

                            </UpperPartInfoAvatar>
                        
                            
                            <UpperPartInfoName>
                                Andrew Johnstons
                            </UpperPartInfoName>
                            
                    
                        </TeamMemberInfo>
                        <TeamMemberInfoRight>
                            <TeamMemberInfoRightHeading>
                                Manager
                            </TeamMemberInfoRightHeading>

                        </TeamMemberInfoRight>
                    </TeamMembersItemsDiv>
                    

                </TeamMembersDiv>
                <ComparisonHeadingPhoneDiv>
                    <BottomPartDivHeading>Comparison</BottomPartDivHeading>
                    <BottomPartDivViewAll>View All</BottomPartDivViewAll>

                </ComparisonHeadingPhoneDiv>
                <ComparisonDiv>
                    <ComparisonItemDiv>
                        <ComparisonItemInfoDiv>
                            <ComparisonItemInfoFlagImg src="data:image/png;base64,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"></ComparisonItemInfoFlagImg>
                            <ComparisonItemInfoHeading>Unite State</ComparisonItemInfoHeading>

                        </ComparisonItemInfoDiv>
                        <ProgressBar completed={60} height={12} bgColor="#4CAF50" />
                    </ComparisonItemDiv>
                    <ComparisonItemDiv>
                        <ComparisonItemInfoDiv>
                            <ComparisonItemInfoFlagImg src="data:image/png;base64,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"></ComparisonItemInfoFlagImg>
                            <ComparisonItemInfoHeading>Italy</ComparisonItemInfoHeading>

                        </ComparisonItemInfoDiv>
                        <ProgressBar completed={80} height={12} bgColor="#4CAF50" />
                    </ComparisonItemDiv>
                    <ComparisonItemDiv>
                        <ComparisonItemInfoDiv>
                            <ComparisonItemInfoFlagImg src="data:image/png;base64,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"></ComparisonItemInfoFlagImg>
                            <ComparisonItemInfoHeading>Span</ComparisonItemInfoHeading>

                        </ComparisonItemInfoDiv>
                        <ProgressBar completed={20} height={12} bgColor="#4CAF50" />
                    </ComparisonItemDiv>

                </ComparisonDiv>

            </BottomPartDiv>


            </RightInnerContainerdiv>
        </RightContainerdiv>
    )
}
export default RightContainer;