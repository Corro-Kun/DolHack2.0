import BarTeacher from "../../components/BarTeacher/BarTeacher";
import Body from "../../components/Body/Body";
import BodyHome from "../../components/BodyHome/BodyHome";

function ClassTeacher(){
    return(
        <Body>
            <BodyHome>
                <BarTeacher home={true} />
            </BodyHome>
        </Body>
    );
}

export default ClassTeacher;