import React from "react";
import BodyHome from "../../components/BodyHome/BodyHome";
import Body from "../../components/Body/Body";
import BarHome from "../../components/BarHome/BarHome";
import ContenetHome from "../../components/ContenetHome/ContenetHome";
import BarProfile from "../../components/BarProfile/BarProfile";
import { ProfileProvider } from "../../context/profile";
import { HomeProvider } from "../../context/home";

function Home() {
    return(
        <Body>
            <BodyHome>
                <ProfileProvider>
                <BarHome home={true}/>
                <HomeProvider>
                    <ContenetHome>
                    
                    </ContenetHome>
                </HomeProvider> 
                    <BarProfile />
                </ProfileProvider>
            </BodyHome>
        </Body>
    );
}

export default Home;