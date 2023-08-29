import React from "react";
import Body from "../components/Body/Body";
import BodyHome from "../components/BodyHome/BodyHome";
import BarHome from "../components/BarHome/BarHome";

function Teachers(){
    return(
        <Body>
            <BodyHome>
                <BarHome teacher={true}/>
            </BodyHome>
        </Body>
    );
}

export default Teachers;