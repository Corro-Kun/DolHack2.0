import BarTeacher from "../../components/BarTeacher/BarTeacher";
import Body from "../../components/Body/Body";
import BodyHome from "../../components/BodyHome/BodyHome";
import SettingClass from "../../components/SettingClass/SettingClass";

function ClassSetting(){
    return(
        <Body>
            <BodyHome>
                <BarTeacher setting={true} />
                <SettingClass />
            </BodyHome>
        </Body>
    );
}

export default ClassSetting;