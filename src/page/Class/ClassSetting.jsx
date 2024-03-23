import BarTeacher from "../../components/BarTeacher/BarTeacher";
import Body from "../../components/Body/Body";
import BodyHome from "../../components/BodyHome/BodyHome";
import SettingClass from "../../components/SettingClass/SettingClass";
import { ClassTeacherProvider } from "../../context/ClassTeacher";

function ClassSetting(){
    return(
        <Body>
            <BodyHome>
                <BarTeacher setting={true} />
                <ClassTeacherProvider>
                    <SettingClass />
                </ClassTeacherProvider>
           </BodyHome>
        </Body>
    );
}

export default ClassSetting;