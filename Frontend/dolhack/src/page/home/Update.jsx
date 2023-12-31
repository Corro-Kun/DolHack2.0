import React from "react";
import { ProfileProvider } from "../../context/profile";
import UpdateUser from "../../components/UpdateUser/UpdateUser";
import Body from "../../components/Body/Body";
import BodyLine from "../../components/BodyLine/BodyLine";

function Update() {
    return(
        <Body>
            <ProfileProvider>
                <UpdateUser />
            </ProfileProvider>
        </Body>
    );
}

export default Update;