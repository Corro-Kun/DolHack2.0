import Body from "../../components/Body/Body";
import BodyListClass from "../../components/BodyListClass/BodyListClass";
import { ExploreClassProvider } from "../../context/ExploreClass";

function ClassList(){
    return(
        <Body>
            <ExploreClassProvider>
                <BodyListClass />
            </ExploreClassProvider>
        </Body>
    );
}

export default ClassList;