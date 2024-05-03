import "./BodyList.css";
import {MdArrowBackIosNew, MdArrowForwardIos} from "react-icons/md";
import { useEffect } from "react";
import { useExploreUser } from "../../context/ExploreUser";
import CardListUser from "../CardListUser/CardListUser";
import CardListMain from "../CardListMain/CardListMain";
import { useNavigate } from "react-router-dom";

function BodyList(){
    const {GetListUser, List, index, RightClick, LeftClick, FilterList} = useExploreUser();
    const navegate = useNavigate();
    useEffect(()=>{
        GetListUser();
    },[]);
    return(
        <div className="BodyList-Render-Div" >
            <div className="BodyList-RightAndLeft" >
                <h1 onClick={()=> LeftClick()} ><MdArrowBackIosNew /></h1>
            </div>
            <div className="BodyList-Main-Div">
                <div className="BodyList-Bar-Div">
                    <input type="text" placeholder="Buscar..." onChange={(e) => FilterList(e)} />
                    <h2 onClick={()=> navegate("/home")} >X</h2>
                </div>
            {
                List.length > 0 ?
                <>
                    <CardListMain data={List[index]} />
                    <div className="BodyList-List">
                        <div className="BodyList-List-Scroll">
                            {List?.map((item, index) => (
                                <CardListUser key={index} item={item} index={index} select={item.active ? true : false} />
                            ))}
                        </div>
                    </div>
                </>
                : 
                <>
                    <div style={{display: "flex", alignContent: "center", justifyContent: "center"}} >
                        <h1>No se encontró nada</h1>
                    </div>
                    <h2></h2>
                </>
            }
            </div>
            <div className="BodyList-RightAndLeft">
                <h1 onClick={() => RightClick()}><MdArrowForwardIos /></h1>
            </div>
        </div>
    );
}
 
export default BodyList;