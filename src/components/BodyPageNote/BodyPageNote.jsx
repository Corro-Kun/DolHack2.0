import "./BodyPageNote.css"

function BodyPageNote({children, title}){
    return(
        <div className="BodyPageNote" >
            <div className="BodyPageNote-Title" >
                <h3>{title}</h3>
            </div>
            {children}
        </div>
    );
}

export default BodyPageNote;