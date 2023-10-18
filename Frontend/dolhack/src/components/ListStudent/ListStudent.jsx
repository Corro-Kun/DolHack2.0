import React,{useEffect} from "react";
import "./ListStudent.css";
import { useClassTeacher } from "../../context/ClassTeacher";

function ListStudent(){
    const {ListS, list, downloadList, FilterStudent} = useClassTeacher();
    useEffect(()=>{
        ListS();
    },[]);
    return(
        <div className="ListStudent-Div-Render" >
            <div className="ListStudent-Main-Div" >
                <div className="ListStudent-Title" >
                    <h2>Lista de estudiantes</h2>
                </div>
                <div className="ListStudent-Contenet" >
                    <div className="ListStudent-Filter" >
                        <input type="text" placeholder="Buscar..." onChange={(e)=> FilterStudent(e) }/>
                    </div>
                    {list.map((l,i)=>(
                        <div key={i} className="ListStudent-Student" >
                        <div className="ListStudent-Data" >
                            <div>
                                <img src={l.foto} alt="" />
                            </div>
                            <h3>{l.nombre} {l.apellido}</h3>
                        </div>
                            <h3>{i+1}</h3>
                        </div>
                    ))} 
                </div>
                <div className="ListStudent-Button" >
                    <button title="¿Descargar Excel?" onClick={()=> downloadList()} >Descargar</button>
                </div>
            </div>
        </div>
    );
}

export default ListStudent;