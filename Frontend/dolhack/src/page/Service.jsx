import React from "react";
import Body from "../components/Body/Body";
import BarMain from "../components/BarMain/BarMain";
import Session from "../components/Session/Session";
import SessionBoxMain from "../components/SessionBox/SessionBoxMain";

function Service(){
    return(
        <Body>
            <BarMain />
            <div style={{margin: "50px", borderBottom: "2px solid var(--Main_Color)"}} >
                <h1 style={{marginBottom: "5px",textAlign: "center"}} >DolHack</h1>
                <p style={{marginBottom: "10px", textAlign: "center"}}>El sistema Dolhack es un sistema donde todas personas puede comenzar con su aprendizaje en el mundo de la programación donde ofrecemos múltiples curso para que pueda comenzar y adquirir nueva, habilidades</p>
            </div>
            <Session title="¿Para Quien va nuestro servicio?">
                    <SessionBoxMain icon="📚" title="¿Quieres Aprender?" descripcion="Dolhack ofrece múltiples cursos para todo aquel que quiera aprender y adquirir nuevas habilidades" button="Ingresar" />
                    <SessionBoxMain icon="👩‍🏫" title="¿Quieres Enseñar?" descripcion="Quieres trasmitir tus conocimientos con los demás, el sistema dolhack te ofrece el poder acompañarte a trasmitir conocimientos con creación de clase y la distribución de material de calidad" button="Ingresar" />
            </Session>
        </Body>
    );
}

export default Service