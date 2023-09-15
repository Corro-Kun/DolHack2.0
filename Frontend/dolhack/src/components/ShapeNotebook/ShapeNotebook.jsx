import BodyPageNote from "../BodyPageNote/BodyPageNote";
import BodyPublication from "../BodyPublication/BodyPublication";
import List from "../List/List";
import Publication from "../Publication/Publication";
import Cookies from "js-cookie";
import "./ShapeNotebook.css";
import { useNavigate } from "react-router-dom";
import { FaArrowsRotate, FaXmark, FaSheetPlastic, FaCheckDouble} from "react-icons/fa6";
import { useClassStudent } from "../../context/ClassStudent";
import { useEffect } from "react";

function ShapeNotebook(){
    const navigate = useNavigate();
    const {consultPost, Post} = useClassStudent();
    useEffect(()=>{
        consultPost();
    },[]);
    return(
        <div className="ShapeNotebook-Div-Render" >
            <div className="ShapeNotebook-Div" >
                <div className="ShapeNotebook-page1" >
                    <div className="ShapeNotebook-Bar-1" >
                        <h2 onClick={()=> {
                            Cookies.remove("class");
                            navigate("/home");
                        }} ><FaXmark /></h2>
                        <h3>Publicaciones de tu profesor</h3>
                        <h2><FaArrowsRotate /></h2>
                    </div> 
                    <BodyPublication>
                        {
                            Post.map((item, index)=>(
                            <Publication key={index} contenet={item.texto} name={item.nombre} img={item.foto} last={item.apellido} image={item.imagen} />
                            ))
                        }
                    </BodyPublication>
                </div>
                <div className="ShapeNotebook-page2" >
                    <div className="ShapeNotebook-Bar-2" >
                        <h3>Nombre de la clase</h3>
                    </div>
                    <BodyPageNote title={"Exámenes"} >
                        <List />
                        <List />
                    </BodyPageNote>
                    <div className="ShapeNotebook-Bar-Botom" >
                        <div>
                            <h2><FaSheetPlastic /></h2>
                            <h2><FaCheckDouble /></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShapeNotebook;