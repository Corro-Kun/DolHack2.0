import "./List.css"
import { useNavigate } from "react-router-dom";

function List({title, data, id ,description}){
    const navigate = useNavigate();
    return(
        <div className="List-Div-Item" >
            <div className="List-Div-Item-title" >
                <p onClick={()=> navigate("/class/student/exam/"+ id) } >{title}</p>
            </div>
            <div className="List-Div-Item-description" >
                <p>{description}</p>
            </div>
            <p>{data}</p>
        </div>
    );
}

export default List;
