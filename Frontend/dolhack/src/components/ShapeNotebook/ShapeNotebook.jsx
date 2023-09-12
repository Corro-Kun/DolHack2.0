import BodyPageNote from "../BodyPageNote/BodyPageNote";
import BodyPublication from "../BodyPublication/BodyPublication";
import List from "../List/List";
import Publication from "../Publication/Publication";
import "./ShapeNotebook.css";
import { FaArrowsRotate, FaXmark, FaSheetPlastic, FaCheckDouble} from "react-icons/fa6";

function ShapeNotebook(){
    return(
        <div className="ShapeNotebook-Div-Render" >
            <div className="ShapeNotebook-Div" >
                <div className="ShapeNotebook-page1" >
                    <div className="ShapeNotebook-Bar-1" >
                        <h2><FaXmark /></h2>
                        <h3>Publicaciones de tu profesor</h3>
                        <h2><FaArrowsRotate /></h2>
                    </div> 
                    <BodyPublication>
                        <Publication />
                        <Publication />
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