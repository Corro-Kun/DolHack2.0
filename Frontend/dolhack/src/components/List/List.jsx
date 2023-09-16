import "./List.css"
import { useNavigate } from "react-router-dom";

function List({title, data, id}){
    const navigate = useNavigate();
    return(
        <div className="List-Div-Item" >
            <p onClick={()=> navigate("/class/student/exam/"+ id) } >{title}</p>
            <p>{data}</p>
        </div>
    );
}

export default List;
