import { useClassStudent } from "../../context/ClassStudent";
import "./List.css"

function List({title, data, id ,description, pass}){
    const {verify} = useClassStudent();
    return(
        <div className="List-Div-Item" >
            <div className="List-Div-Item-title" >
                <p onClick={pass? ()=> verify(id) : null } >{title}</p>
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
