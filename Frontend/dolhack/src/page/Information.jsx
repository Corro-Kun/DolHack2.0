import React from "react";
import Body from "../components/Body/Body";
import BarMain from "../components/BarMain/BarMain";
import TitleNumber from "../components/TitleNumber/TitleNumber";

function Information(){
    return(
        <Body>
            <BarMain />
            <TitleNumber number={1} title={"¿Eres un profesor de programación?"} description={"DolHack ofrece un sistema amigable y fácil de usar para que empieces a dictar clase"} />
            <TitleNumber />
        </Body>
    );
}

export default Information