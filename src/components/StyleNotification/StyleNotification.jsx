import "./StyleNotification.css";

export default function StyleNotification({title, description}) {
    return(
        <div className="StyleNotification-Div" >
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}