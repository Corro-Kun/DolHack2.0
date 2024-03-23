import React from "react";
import Body from "../../components/Body/Body";
import CreateExam from "../../components/CreateExam/CreateExam";
import { ExamProvider } from "../../context/exam";

function ExamNew(){
    return(
        <Body>
            <ExamProvider>
                <CreateExam />
            </ExamProvider>
        </Body>
    );
}

export default ExamNew;