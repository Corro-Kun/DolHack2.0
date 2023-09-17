import React from "react";
import Body from "../../components/Body/Body";
import AnswerQuiz from "../../components/AnswerQuiz/AnswerQuiz";
import { ExamProvider } from "../../context/exam";

function ExamAnswer(){
    return(
        <Body>
            <ExamProvider>
                <AnswerQuiz />
            </ExamProvider>
        </Body>
    );
}

export default ExamAnswer;