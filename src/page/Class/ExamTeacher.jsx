import React from "react";
import Body from "../../components/Body/Body";
import BodyHome from "../../components/BodyHome/BodyHome";
import BarTeacher from "../../components/BarTeacher/BarTeacher";
import DashExam from "../../components/DashExam/DashExam";
import { ExamProvider } from "../../context/exam";

function ExamTeacher() {
  return (
    <Body>
        <BodyHome>
            <BarTeacher exam={true} />
            <ExamProvider>
              <DashExam />
            </ExamProvider>
        </BodyHome>
    </Body>
  );
}

export default ExamTeacher;