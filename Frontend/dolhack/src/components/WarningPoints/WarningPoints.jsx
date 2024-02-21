import "./WarningPoints.css"

export default function WarningPoints({number, title, description}) {
    return(
        <div className="warning-class-points" >
            <h3>{number}. {title}</h3>
            <p>{description}</p>
        </div>
    );
}