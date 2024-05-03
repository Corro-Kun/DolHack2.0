import { useExploreUser } from "../../context/ExploreUser";

export default function CardListUser({item, select, index}){
    const {ClickCard} = useExploreUser();
    return(
        <div className="BodyList-List-Card" id={select? "ActiveBodyListCard": null} onClick={()=> ClickCard(index)} >
            <div className="BodyList-List-Card-Contenet" >
                <div id={select? "activeBodyListContenet": null} >
                    <img src={item.foto} alt="" loading="lazy" />
                </div>
                <h3>{item.nombre} {item.apellido}</h3>
            </div>
        </div>
    );
}