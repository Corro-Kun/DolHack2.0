import React from "react";
import Body from "../../components/Body/Body";
import BoxRegister from "../../components/BoxRegister/BoxRegister";
import { AuthProvider } from "../../context/auth";

function Register(){
    return(
        <Body>
            <AuthProvider>
                <BoxRegister />
            </AuthProvider>
        </Body>
    );
}

export default Register;