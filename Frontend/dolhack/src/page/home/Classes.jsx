import React from "react";
import Body from "../../components/Body/Body";
import BodyHome from "../../components/BodyHome/BodyHome";
import BarHome from "../../components/BarHome/BarHome";
import ContenetHome from "../../components/ContenetHome/ContenetHome";
import BarProfile from "../../components/BarProfile/BarProfile";
import { ProfileProvider } from "../../context/profile";
import { HomeProvider } from "../../context/home";

function Classes(){
    return(
        <Body>
            <BodyHome>
                <BarHome classs={true}/>
                <HomeProvider>
                    <ContenetHome>
                    
                    </ContenetHome>
                </HomeProvider>
                <ProfileProvider>
                    <BarProfile />
                </ProfileProvider>
            </BodyHome>
        </Body>
    );
}

export default Classes;