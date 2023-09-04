import React from "react";
import Body from "../../components/Body/Body";
import BodyHome from "../../components/BodyHome/BodyHome";
import BarHome from "../../components/BarHome/BarHome";
import ContenetHome from "../../components/ContenetHome/ContenetHome";
import BarProfile from "../../components/BarProfile/BarProfile";
import { ProfileProvider } from "../../context/profile";
import ContenetUser from "../../components/ContenetUser/ContenetUser";
import { HomeProvider } from "../../context/home";

function Teachers(){
    return(
        <Body>
            <BodyHome>
                <BarHome teacher={true}/>
                <HomeProvider>
                    <ContenetHome>
                        <ContenetUser teacher={true} />
                    </ContenetHome>
                </HomeProvider>
                <ProfileProvider>
                    <BarProfile />
                </ProfileProvider>
            </BodyHome>
        </Body>
    );
}

export default Teachers;