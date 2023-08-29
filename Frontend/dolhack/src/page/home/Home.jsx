import React from "react";
import BodyHome from "../../components/BodyHome/BodyHome";
import Body from "../../components/Body/Body";
import BarHome from "../../components/BarHome/BarHome";
import ContenetHome from "../../components/ContenetHome/ContenetHome";
import BarProfile from "../../components/BarProfile/BarProfile";

function Home() {
    return(
        <Body>
            <BodyHome>
                <BarHome home={true}/>
                <ContenetHome>
                    
                </ContenetHome>
                <BarProfile />
            </BodyHome>
        </Body>
    );
}

export default Home;