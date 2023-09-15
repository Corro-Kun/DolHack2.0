import React, { Suspense } from "react";
import "./BarProfile.css";
import {FiSettings} from "react-icons/fi";
import {MdOutlineEditNotifications} from "react-icons/md";
import {TbMessages} from "react-icons/tb";
import {useProfile} from "../../context/profile";
import {BsDoorOpen} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function BarProfile() {
  const navegate = useNavigate();
  const {DataProfile, Logout, myClass, EnterYourClass} = useProfile();
  return (
    <div className="Profile-Home">
      <div className="Settings-Home">
        <ul>
          <samp>
            <TbMessages />
          </samp>
        </ul>
        <ul>
          <samp>
            <MdOutlineEditNotifications />
          </samp>
        </ul>
        <ul>
          <samp onClick={()=> navegate("/update")} >
            <FiSettings />
          </samp>
        </ul>
        <ul>
          <samp onClick={()=> Logout()} >
            <BsDoorOpen />
          </samp>
        </ul>
      </div>
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
        <ul>
          <div className="Home-Photo-Teachers">
            <img src={"https://encuentra.com/wp-content/uploads/2022/06/Valoresparaprofesores-encuentra.com_.jpg"} loading="lazy" />
          </div>
          <p>Isabella Vega</p>
        </ul>
        <ul>
          <div className="Home-Photo-Teachers">
            <img src={"https://img.freepik.com/fotos-premium/joven-maestro-pie-libro_488220-18480.jpg?w=360"} loading="lazy" />
          </div>
          <p>Lucas Mendez</p>
        </ul>
        <ul>
          <div className="Home-Photo-Teachers">
            <img src={"https://st.depositphotos.com/1011643/2892/i/600/depositphotos_28926109-stock-photo-primary-teacher-helping-student-in.jpg"} />
          </div>
          <p>Mateo Sánchez</p>
        </ul>
      </div>
      <div className="Home-Profile-Profesor">
        <p>Tus Clases</p>
        <a href="#">Ver Todo</a>
      </div>
      <div id="List-Profile-Class" className="Home-Profile-teachers">
        {
          myClass.map((data, i)=>(
            <ul key={i} onClick={()=> EnterYourClass(data.idclase)} style={{backgroundImage: "url('"+data.imagen+"')"}} >
              <p>{data.titulo}</p>
            </ul>
          ))
        }
      </div>
    </div>
  );
}

export default BarProfile;
