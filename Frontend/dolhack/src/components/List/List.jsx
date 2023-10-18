import "./List.css"
import { useNavigate } from "react-router-dom";

function List({title, data, id ,description, pass}){
    const navigate = useNavigate();
    return(
        <div className="List-Div-Item" >
            <div className="List-Div-Item-title" >
                <p onClick={pass? ()=> navigate("/class/student/exam/"+ id) : null } >{title}</p>
            </div>
            <div className="List-Div-Item-description" >
                <p>{description}</p>
            </div>
            <div className="List-Div-P" >
                <p>{data}</p>
            </div>
        </div>
    );
}

export default List;
