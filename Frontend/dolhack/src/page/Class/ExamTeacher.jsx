import React from "react";
import Body from "../../components/Body/Body";
import BodyHome from "../../components/BodyHome/BodyHome";
import BarTeacher from "../../components/BarTeacher/BarTeacher";
import DashExam from "../../components/DashExam/DashExam";

function ExamTeacher() {
  return (
    <Body>
        <BodyHome>
            <BarTeacher exam={true} />
            <DashExam />
        </BodyHome>
    </Body>
  );
}

export default ExamTeacher;