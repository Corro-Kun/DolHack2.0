import React from "react";
import Body from "../../components/Body/Body";
import BarMain from "../../components/BarMain/BarMain";
import IntroMain from "../../components/IntroMain/IntroMain";
import Session from "../../components/Session/Session";
import SessionBoxMain from "../../components/SessionBox/SessionBoxMain";

function FristHome(){
    return(
        <Body>
            <BarMain />
            <IntroMain />
            <Session title="¿Eres nuevo?">
                <SessionBoxMain  icon="👋" title="¡Hola!" descripcion="Si eres nuevo en la plataforma, te recomendamos que te registres para que puedas disfrutar de todos los beneficios que te ofrece la plataforma." button="Registrarse" path="/login" />
                <SessionBoxMain  icon="ℹ️" title="Más Información" descripcion="Ve a información Allí encontrarás una gran cantidad de detalles y datos interesantes que seguramente te serán de utilidad. ¡No dudes en explorar y aprender más!" button="Información" path="/information" />
                <SessionBoxMain icon="🛠️" title="Servicios" descripcion="Te animamos a explorar nuestra sección de servicios, Aquí encontrarás una variedad de servicios diseñados para satisfacer tus necesidades. " button="servicios" path="/services" />
            </Session>
        </Body>
    );
}

export default FristHome
