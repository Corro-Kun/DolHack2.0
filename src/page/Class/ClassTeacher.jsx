import BarTeacher from "../../components/BarTeacher/BarTeacher";
import Body from "../../components/Body/Body";
import BodyHome from "../../components/BodyHome/BodyHome";
import PostTeacher from "../../components/PostTeacher/PostTeacher";
import { ClassTeacherProvider } from "../../context/ClassTeacher";

function ClassTeacher(){
    return(
        <Body>
            <BodyHome>
                <BarTeacher home={true} />
                <ClassTeacherProvider>
                    <PostTeacher />
                </ClassTeacherProvider>
            </BodyHome>
        </Body>
    );
}

export default ClassTeacher;