import React from "react";
import Body from "../../components/Body/Body";
import BodyHome from "../../components/BodyHome/BodyHome";
import BarHome from "../../components/BarHome/BarHome";
import ContenetHome from "../../components/ContenetHome/ContenetHome";
import BarProfile from "../../components/BarProfile/BarProfile";
import { ProfileProvider } from "../../context/profile";

function Teachers(){
    return(
        <Body>
            <BodyHome>
                <BarHome teacher={true}/>
                <ContenetHome>
                    
                </ContenetHome>
                <ProfileProvider>
                    <BarProfile />
                </ProfileProvider>
            </BodyHome>
        </Body>
    );
}

export default Teachers;