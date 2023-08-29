import React from "react";
import Body from "../../components/Body/Body";
import BodyHome from "../../components/BodyHome/BodyHome";
import BarHome from "../../components/BarHome/BarHome";
import ContenetHome from "../../components/ContenetHome/ContenetHome";
import BarProfile from "../../components/BarProfile/BarProfile";

function Teachers(){
    return(
        <Body>
            <BodyHome>
                <BarHome teacher={true}/>
                <ContenetHome>
                    
                </ContenetHome>
                <BarProfile />
            </BodyHome>
        </Body>
    );
}

export default Teachers;