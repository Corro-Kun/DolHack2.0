import Body from "../../components/Body/Body";
import ShapeNotebookC from "../../components/ShapeNotebookC/ShapeNotebookC";
import { ClassStudentProvider } from "../../context/ClassStudent";

function ClassCalific(){
    return(
        <Body>
            <ClassStudentProvider>
                <ShapeNotebookC />
            </ClassStudentProvider>
        </Body>
    );
}

export default ClassCalific;