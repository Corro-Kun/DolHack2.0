import React from "react";
import Body from "../../components/Body/Body";
import BodyHome from "../../components/BodyHome/BodyHome";
import BarHome from "../../components/BarHome/BarHome";

function Classes(){
    return(
        <Body>
            <BodyHome>
                <BarHome classs={true}/>
            </BodyHome>
        </Body>
    );
}

export default Classes;