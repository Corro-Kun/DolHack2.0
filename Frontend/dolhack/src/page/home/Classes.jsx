import React from "react";
import Body from "../../components/Body/Body";
import BodyHome from "../../components/BodyHome/BodyHome";
import BarHome from "../../components/BarHome/BarHome";
import ContenetHome from "../../components/ContenetHome/ContenetHome";
import BarProfile from "../../components/BarProfile/BarProfile";
import { ProfileProvider } from "../../context/profile";
import { HomeProvider } from "../../context/home";
import CardClass from "../../components/CardClass/CardClass";
import StoreCardClass from "../../components/StoreCardClass/StoreCardClass";
import { ClassProvider } from "../../context/class";

function Classes(){
    return(
        <Body>
            <BodyHome>
                <ProfileProvider>
                <BarHome classs={true}/>
                <HomeProvider>
                    <ClassProvider>
                        <ContenetHome>
                            <StoreCardClass />
                        </ContenetHome>
                    </ClassProvider>
               </HomeProvider>
                    <BarProfile />
                </ProfileProvider>
            </BodyHome>
        </Body>
    );
}

export default Classes;