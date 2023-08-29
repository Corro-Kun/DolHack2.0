import React from "react";
import Body from "../../components/Body/Body";
import BodyHome from "../../components/BodyHome/BodyHome";
import BarHome from "../../components/BarHome/BarHome";

function Studens(){
    return(
        <Body>
            <BodyHome>
                <BarHome studen={true}/>
            </BodyHome>
        </Body>
    );
}

export default Studens;