import "./BodyList.css";
import {MdArrowBackIosNew, MdArrowForwardIos} from "react-icons/md";
import {FiMessageSquare} from "react-icons/fi";

function BodyList(){
    return(
        <div className="BodyList-Render-Div" >
            <div className="BodyList-RightAndLeft" >
                <h1><MdArrowBackIosNew /></h1>
            </div>
            <div className="BodyList-Main-Div" >
                <div className="BodyList-Bar-Div" >
                    <input type="text" placeholder="Buscar..." />
                </div>
                <div className="BodyList-Card-Div" style={{backgroundImage: "url('https://i.pinimg.com/originals/f5/f2/74/f5f27448c036af645c27467c789ad759.gif')"}}  >
                    <div className="BodyList-Card-Conte"  >
                        <div className="BodyList-Card-Des" >
                            <div>
                                <h4>X</h4>
                                <h2>Nombre de la clase</h2>
                                <h4><FiMessageSquare /></h4>
                            </div>
                            <div className="BodyList-Card-Photo" >
                                <img src={"https://img.wattpad.com/ac31b4129b7b0884340fbe96a8ce7934b62d3599/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f54663171696159447a776f4548773d3d2d38362e313466636161316639613262616236633133393338383833393930322e676966"} alt="" />
                            </div>
                            <div>
                                <h1>Nombre</h1>
                                <p>Estudiante</p>
                            </div>
                       </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className="BodyList-RightAndLeft" >
                <h1><MdArrowForwardIos /></h1>
            </div>
        </div>
    );
}

export default BodyList;