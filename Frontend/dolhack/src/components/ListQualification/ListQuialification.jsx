import { useEffect } from "react";
import { useClassTeacher } from "../../context/ClassTeacher";

function ListQuialification(){
    const {ListQualification,Listqualification, downloadQualification} = useClassTeacher();
    useEffect(()=>{
        ListQualification();
    },[]);
    return(
        <div className="ListStudent-Div-Render" >
            <div className="ListStudent-Main-Div" >
                <div className="ListStudent-Title" >
                    <h2>Calificación de estudiantes</h2>
                </div>
                <div className="ListStudent-Contenet" >
                    {
                        Listqualification.map((item, index)=>(
                            <div key={index} className="ListStudent-Student" >
                                <div className="ListStudent-Data" >
                                    <div>
                                        <img src={item.foto} alt="" />
                                    </div>
                                    <h3>{item.nombre} {item.apellido}</h3>
                                </div>
                                <p style={{marginRight: "50px"}} >{item.titulo}</p>
                                <h3>{item.respuestas}/{item.preguntas} = {item.calificacion}</h3>
                            </div>
 
                        ))
                    }
               </div>
                <div className="ListStudent-Button" >
                    <button onClick={()=> downloadQualification()} >Descargar</button>
                </div>
            </div>
        </div>
    );
}

export default ListQuialification;