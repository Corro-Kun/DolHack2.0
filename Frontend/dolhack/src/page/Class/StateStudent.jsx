import Body from '../../components/Body/Body';
import StateDetails from '../../components/StateDetails/StateDetails';
import { ClassTeacherProvider } from '../../context/ClassTeacher';

export default function StateStudent() {
    return(
        <Body>
            <ClassTeacherProvider>
                <StateDetails />
            </ClassTeacherProvider>
        </Body>
    );
}