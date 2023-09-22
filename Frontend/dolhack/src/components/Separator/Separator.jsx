import "./Separator.css"

function Separator({title, link}) {
    return(
        <div className="Title-Home-BestClass">
            <h2>{title}</h2>
            <a href="#">{link}</a>
        </div>
    ); 
}

export default Separator;