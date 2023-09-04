import React from "react";
import Body from "../../components/Body/Body";
import BodyHome from "../../components/BodyHome/BodyHome";
import BarHome from "../../components/BarHome/BarHome";
import ContenetHome from "../../components/ContenetHome/ContenetHome";
import BarProfile from "../../components/BarProfile/BarProfile";
import { ProfileProvider } from "../../context/profile";
import ContenetUser from "../../components/ContenetUser/ContenetUser";
import CardUser from "../../components/CardUser/CardUser";

function Studens(){
    return(
        <Body>
            <BodyHome>
                <BarHome studen={true}/>
                <ContenetHome>
                    <ContenetUser>
                        <CardUser />
                        <CardUser />
                        <CardUser />
                        <CardUser />
                        <CardUser />
                        <CardUser />
                        <CardUser />
                        <CardUser />
                        <CardUser />
                    </ContenetUser> 
                </ContenetHome>
                <ProfileProvider>
                    <BarProfile />
                </ProfileProvider>
            </BodyHome>
        </Body>
    );
}

export default Studens;