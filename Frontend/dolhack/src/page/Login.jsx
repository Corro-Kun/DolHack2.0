import React from "react";
import Body from "../components/Body/Body";
import BarMain from "../components/BarMain/BarMain";
import LoginRegister from "../components/LoginRegister/LoginRegister";

function Login(){
    return(
        <Body>
            <BarMain />
            <LoginRegister />
        </Body>
    );
}

export default Login