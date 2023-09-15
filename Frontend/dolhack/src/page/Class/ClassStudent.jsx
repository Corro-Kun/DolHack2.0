import Body from "../../components/Body/Body";
import ShapeNotebook from "../../components/ShapeNotebook/ShapeNotebook";
import { ClassStudentProvider } from "../../context/ClassStudent";

function ClassStudent(){
    return(
        <Body>
            <ClassStudentProvider>
                <ShapeNotebook />
            </ClassStudentProvider>
        </Body>
    );
}

export default ClassStudent;