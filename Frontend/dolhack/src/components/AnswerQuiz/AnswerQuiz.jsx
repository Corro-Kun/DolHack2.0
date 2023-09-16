import "./AnswerQuiz.css"

function AnswerQuiz(){
    return(
        <div className="AnswerQuiz-Div-Render" >
            <div className="AnswerQuiz-Main" >
                <div className="AnswerQuiz-Title" >
                    <h2>titulo</h2>
                    <p>descripción</p>
                </div>
                <div className="AnswerQuiz-Questions" >
                    <div className="AnswerQuiz-Question" >
                        <h3>1. Pregunta</h3>
                        <div className="AnswerQuiz-Options" >
                            <div>
                                <input type="radio" />
                                <label>A. </label>
                            </div>
                            <div>
                                <input type="radio" />
                                <label>B. </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="AnswerQuiz-button" >
                    <button>Enviar</button>
                </div>
            </div>
        </div>
    );
}

export default AnswerQuiz;