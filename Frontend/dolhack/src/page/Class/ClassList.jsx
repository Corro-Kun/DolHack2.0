import React from "react";
import Body from "../../components/Body/Body";
import BodyHome from "../../components/BodyHome/BodyHome";
import BarTeacher from "../../components/BarTeacher/BarTeacher";
import ListStudent from "../../components/ListStudent/ListStudent";
import { ClassTeacherProvider } from "../../context/ClassTeacher";

function ClassList() {
    return(
        <Body>
            <BodyHome>
                <BarTeacher list={true} />
                <ClassTeacherProvider>
                    <ListStudent />
                </ClassTeacherProvider>
            </BodyHome>
        </Body>
    );
}

export default ClassList;