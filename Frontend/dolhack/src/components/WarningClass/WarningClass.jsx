import "./WarningClass.css";

function WarningClass() {
  return (
    <div className="warning-class-render">
        <div className="warning-class-div">
            <div className="warning-class-text" >
                <div className="warning-class-title">
                    <h2>¿Estás seguro que quieres abandonar la clase?</h2>
                </div>
            </div>
            <div className="warning-class-buttons">
                <button style={{marginRight: "100px", backgroundColor: "red"}} >Cancelar</button>
                <button style={{backgroundColor: "var(--Main_Color)"}} >Aceptar</button>
            </div>
        </div>
    </div>
  );
}

export default WarningClass;