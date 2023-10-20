import React, { Suspense} from "react";
import "./BarProfile.css";
import {useProfile} from "../../context/profile";
import MinBarProfile from "../MinBarProfile/MinBarProfile";

function BarProfile() {
  const {DataProfile, myClass, EnterYourClass, list} = useProfile();
  return (
    <div className="Profile-Home">
      <MinBarProfile />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="Photo-Home">
          <div className="Photo-Home-Shape1"></div>
          <div className="Photo-Home-Shape2"></div>
          <div className="Photo-Home-Render">
            <img
              src={DataProfile.foto}
              loading="lazy"
            />
          </div>
        </div>
      </Suspense>
     <div className="Profile-Data-Div">
        <h2>{DataProfile.nombre} {DataProfile.apellido}</h2>
        <p>{DataProfile.correo}</p>
      </div>
      <div className="Home-Profile-Profesor">
        <p>{DataProfile.rol === "profesor"? "Tus Estudiantes" : "Tus Profesor"}</p>
        <a href="#">Ver Todo</a>
      </div>
      <div className="Home-Profile-teachers">
        {
          list.length > 0 ? list?.map((item, index)=>{
            if(index <= 2){
              return(
              <ul key={index} >
                <div className="Home-Photo-Teachers">
                  <img src={item.foto} loading="lazy" />
                </div>
                <p>{item.nombre} {item.apellido}</p>
              </ul> 
              )
            }
          }) : <p style={{color: "GrayText"}} >No tienes {DataProfile.rol === "profesor"? "Estudiantes" : "Profesores"}</p>
        }
     </div>
      <div className="Home-Profile-Profesor">
        <p>Tus Clases</p>
        <a href="#">Ver Todo</a>
      </div>
      <div id="List-Profile-Class" className="Home-Profile-teachers">
        {
          myClass.length > 0 ? myClass.map((data, i)=>{
            if(i <= 2){
              return(
                <ul key={i} onClick={()=> {
                  let bolean = false;
                  if (DataProfile.rol === "profesor") {
                    bolean = true;
                  }
                  EnterYourClass(data.idclase, bolean)
                  }} style={{backgroundImage: "url('"+data.imagen+"')"}} >
                  <p>{data.titulo}</p>
                </ul>
              )
            }
          }) : <p style={{color: "GrayText"}} >No tienes clases</p>
        }
      </div>
    </div>
  );
}

export default BarProfile;
