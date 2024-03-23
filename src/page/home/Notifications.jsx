import Body from "../../components/Body/Body";
import {HomeProvider} from "../../context/home";
import TrayNotificacions from "../../components/TrayNotificacions/TrayNotificacions";

function Notificacions(){
    return (
        <Body>
            <HomeProvider>
                <TrayNotificacions />
            </HomeProvider>
        </Body>
    )
}

export default Notificacions;