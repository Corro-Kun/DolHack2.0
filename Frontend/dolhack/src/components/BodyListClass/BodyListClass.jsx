import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./BodyListClass.css";
import { useExploreClassContext } from "../../context/ExploreClass";
import { useEffect } from "react";

export default function BodyListClass(){
    const navegate = useNavigate();
    const {GetList,List, Index, ClickCard, RightClick, LeftClick, isAnimating} = useExploreClassContext();
    useEffect(()=>{
        GetList();
    },[]);
    return(
        <div className="BodyList-Render-Div" >
            <div className="BodyList-RightAndLeft" >
                <h1 onClick={()=> LeftClick()} ><MdArrowBackIosNew /></h1>
            </div>
            <div className="BodyList-Main-Div">
                <div className="BodyList-Bar-Div">
                    <input type="text" placeholder="Buscar..." />
                    <h2 onClick={()=> navegate("/home")} >X</h2>
                </div>
                <div className={`BodyList-Class-Main ${isAnimating ? 'BodyList-Class-Main-Right' : ''}`} >
                    <div className="BodyList-Class-Main-Div1" style={{backgroundImage: "url('"+List[Index].imagen+"')"}} >
                    </div>
                    <div className="BodyList-Class-Main-Div2" >
                        <div>
                            <h2>{List[Index].titulo}</h2>
                            <p>{List[Index].descripcion}</p>
                            <button onClick={()=> navegate("/infoclass/"+List[Index].idclase)} >Más información</button>
                        </div>
                    </div>
                </div>
                <div className="BodyList-Class-List" >
                    <div className="BodyList-Class-Scroll" >
                        {
                            List?.map((item, index)=>(
                            <div key={index} id={item.active? 'BodyList-Class-CardActive': null} onClick={()=>ClickCard(index)} className="BodyList-Class-Card" style={{backgroundImage: "url('"+item.imagen+"')"}} >
                                <div>
                                    <h4>{item.titulo}</h4>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="BodyList-RightAndLeft">
                <h1 onClick={()=> RightClick()} ><MdArrowForwardIos /></h1>
            </div>
        </div>
    );
}