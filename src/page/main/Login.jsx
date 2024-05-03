import React from "react";
import Body from "../../components/Body/Body";
import BarMain from "../../components/BarMain/BarMain";
import LoginRegister from "../../components/LoginRegister/LoginRegister";
import {AuthProvider} from "../../context/auth";

function Login(){
    return(
        <Body>
            <BarMain />
            <AuthProvider>
                <LoginRegister />
            </AuthProvider>
        </Body>
    );
}

export default Login