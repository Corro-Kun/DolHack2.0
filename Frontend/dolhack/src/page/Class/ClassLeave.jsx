import Body from "../../components/Body/Body";
import WarningClass from "../../components/WarningClass/WarningClass";
import {ClassStudentProvider} from "../../context/ClassStudent";

export default function ClassLeave() {
    return (
        <Body>
            <ClassStudentProvider>
                <WarningClass />
            </ClassStudentProvider>
        </Body>
    )
}