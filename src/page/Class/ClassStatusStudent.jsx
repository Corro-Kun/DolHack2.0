import Body from "../../components/Body/Body";
import ShapeNotebookP from "../../components/ShapeNotebookP/ShapeNotebookP";
import { ClassStudentProvider } from "../../context/ClassStudent";
import { ExamProvider } from "../../context/exam";

function ClassStatusStudent() {
  return (
    <Body>
        <ClassStudentProvider>
            <ExamProvider>
                <ShapeNotebookP />
            </ExamProvider>
        </ClassStudentProvider>
    </Body>
  );
}

export default ClassStatusStudent;