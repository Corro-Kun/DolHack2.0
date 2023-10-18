import "./Publication.css"

function Publication({contenet, name, img, last, image}){
    return(
        <div className="Publication" >
            <div className="Publication-Profile" >
                <div className="Publication-Profile-Data" >
                    <div className="Publication-Profile-img" >
                        <img src={img} alt="" loading="lazy" />
                    </div>
                    <h4>{name} {last}</h4>
                </div>
                <p>1:00pm</p>
            </div>
            <p style={{marginBottom: "2px"}} >
                {contenet}
            </p>
            {
                image ?  
                <div className="Publication-Div-Render-Img" >
                    <div className="Publication-Div-IMg" onClick={()=> window.open(image, "_blank")} >
                        <img src={image} alt="" loading="lazy" />
                    </div>
                </div>
                : null
            }
       </div>
    );
}

export default Publication;