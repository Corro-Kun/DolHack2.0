import React from "react";
import Body from "../components/Body/Body";
import BarMain from "../components/BarMain/BarMain";
import TitleNumber from "../components/TitleNumber/TitleNumber";
import TitleButton from "../components/TitleButton/TitleButton";

function Information(){
    return(
        <Body>
            <BarMain />
            <TitleNumber number={1} title={"¿Eres un profesor de programación?"} description={"DolHack ofrece un sistema amigable y fácil de usar para que empieces a dictar clase"} />
            <TitleNumber number={2} title="¿Quieres estudiar programación?" description="En DolHack hay muchas clases que puedes explorar a tu gusto" />
            <TitleNumber number={3} title="Aprender es divertido!" description="Descubre una nueva forma de aprender con el sistema de niveles de DolHack que te mantendrá entretenido y motivado" />
            <TitleButton title="¡Empecemos!" descripcion="¡Crea tu cuenta ya!" button="registrate" link="/login" />
        </Body>
    );
}

export default Information