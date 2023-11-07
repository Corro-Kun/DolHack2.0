import Body from "../../components/Body/Body";
import BodyList from "../../components/BodyList/BodyList";
import { ExploreUserProvider } from "../../context/ExploreUser";

export function UserList(){
    return(
        <Body>
            <ExploreUserProvider>
                <BodyList/>
            </ExploreUserProvider>
        </Body>
    );
}

export default UserList;