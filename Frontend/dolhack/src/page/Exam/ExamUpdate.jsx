import Body from "../../components/Body/Body";
import UpdateExam from "../../components/UpdateExam/UpdateExam";
import { ExamProvider } from "../../context/exam";

function ExamUpdate(){
    return(
        <Body>
            <ExamProvider>
                <UpdateExam />
            </ExamProvider>
        </Body>
    );
}

export default ExamUpdate;