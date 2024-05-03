import "./Separator.css"
import { Link } from "react-router-dom";

function Separator({title, link, path}) {
    return(
        <div className="Title-Home-BestClass">
            <h2>{title}</h2>
            <Link to={path}>{link}</Link>
        </div>
    ); 
}

export default Separator;