import React from "react";
import Body from "../../components/Body/Body";
import BoxCreateClass from "../../components/BoxCreateClass/BoxCreateClass";
import { ClassProvider } from "../../context/class";

function CreateClass(){
    return(
        <Body>
            <ClassProvider>
                <BoxCreateClass />
            </ClassProvider>
        </Body>
    );
}

export default CreateClass;