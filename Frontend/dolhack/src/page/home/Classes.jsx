import React from "react";
import Body from "../../components/Body/Body";
import BodyHome from "../../components/BodyHome/BodyHome";
import BarHome from "../../components/BarHome/BarHome";
import ContenetHome from "../../components/ContenetHome/ContenetHome";
import BarProfile from "../../components/BarProfile/BarProfile";

function Classes(){
    return(
        <Body>
            <BodyHome>
                <BarHome classs={true}/>
                <ContenetHome>
                    
                </ContenetHome>
                <BarProfile />
            </BodyHome>
        </Body>
    );
}

export default Classes;