import React from "react";
import Body from "../../components/Body/Body";
import BodyHome from "../../components/BodyHome/BodyHome";
import BarTeacher from "../../components/BarTeacher/BarTeacher";
import { ClassTeacherProvider } from "../../context/ClassTeacher";
import ListQuialification from "../../components/ListQualification/ListQuialification";

function ClassQuialification() {
    return(
        <Body>
            <BodyHome>
                <BarTeacher quilification={true} />
                <ClassTeacherProvider>
                    <ListQuialification />
                </ClassTeacherProvider>
            </BodyHome>
        </Body>
    );
}

export default ClassQuialification;