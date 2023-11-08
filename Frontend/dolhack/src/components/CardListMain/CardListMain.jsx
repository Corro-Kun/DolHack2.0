import { useExploreUser } from "../../context/ExploreUser";
import "./CardListMain.css";
import { FiMessageSquare } from "react-icons/fi";

function CardListMain({data}){
    const {isAnimating} = useExploreUser();
    return(
        <div className={`BodyList-Card-Div  ${isAnimating ? 'BodyList-Card-Right' : ''}`} style={{backgroundImage: "url('"+data.banner+"')"}}  >
            <div className="BodyList-Card-Conte"  >
                <div className="BodyList-Card-Des" >
                    <div>
                        <h4>X</h4>
                        <h2>{data.titulo}</h2>
                        <h4><FiMessageSquare /></h4>
                    </div>
                    <div className="BodyList-Card-Photo" >
                        <img src={data.foto} alt="" />
                    </div>
                    <div>
                        <h1>{data.nombre} {data.apellido}</h1>
                        <p>{data.rol_idrol === 1 ? "Profesor": "Estudiante"}</p>
                    </div>
               </div>
            </div>
        </div>
    );
}

export default CardListMain;