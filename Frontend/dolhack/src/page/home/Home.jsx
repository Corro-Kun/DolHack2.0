import React from "react";
import BodyHome from "../../components/BodyHome/BodyHome";
import Body from "../../components/Body/Body";
import BarHome from "../../components/BarHome/BarHome";

function Home() {
    return(
        <Body>
            <BodyHome>
                <BarHome home={true}/>
            </BodyHome>
        </Body>
    );
}

export default Home;