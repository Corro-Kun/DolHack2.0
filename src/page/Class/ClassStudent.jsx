import Body from "../../components/Body/Body";
import ShapeNotebook from "../../components/ShapeNotebook/ShapeNotebook";
import { ClassStudentProvider } from "../../context/ClassStudent";
import { ExamProvider } from "../../context/exam";

function ClassStudent(){
    return(
        <Body>
            <ClassStudentProvider>
                <ExamProvider>
                    <ShapeNotebook />
                </ExamProvider>
            </ClassStudentProvider>
        </Body>
    );
}

export default ClassStudent;