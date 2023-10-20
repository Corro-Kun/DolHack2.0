import React from "react";
import BodyHome from "../../components/BodyHome/BodyHome";
import Body from "../../components/Body/Body";
import BarHome from "../../components/BarHome/BarHome";
import ContenetHome from "../../components/ContenetHome/ContenetHome";
import BarProfile from "../../components/BarProfile/BarProfile";
import { ProfileProvider } from "../../context/profile";
import { HomeProvider } from "../../context/home";
import Carrouser from "../../components/Carrouser/Carrouser";
import Separator from "../../components/Separator/Separator";
import ContenetBestClass from "../../components/ContenetBestClass/ContenetBestClass";

function Home() {
    return(
        <Body>
            <BodyHome>
                <ProfileProvider>
                <BarHome home={true}/>
                <HomeProvider>
                    <ContenetHome>
                        <Carrouser />
                        <Separator title={"Mejores Clases"} link={"Ver Todas"} path={"/classes"} />
                        <ContenetBestClass classs={true} />
                        <Separator title={"Mejores Profesores"} link={"Ver Todos"} path={"/teachers"} />
                        <ContenetBestClass />
                    </ContenetHome>
                </HomeProvider> 
                    <BarProfile />
                </ProfileProvider>
            </BodyHome>
        </Body>
    );
}

export default Home;