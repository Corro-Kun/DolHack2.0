import React,{useContext, createContext, useState} from "react";
import {PostQuiz} from "../api/exam";

const ExamContext = createContext();

export function useExam(){
    return useContext(ExamContext);
}

export function ExamProvider({children}){
    // esto es para la creacion de examenes    
    const [NumQuestion, setNumQuestion] = useState(1);
    const [Saveopciones, setSaveopciones] = useState([0]);

    function AddQuestion(){
        let Question = [];
        for(let a = 0; a < NumQuestion; a++){
            Question.push(
                <div key={a} className="Question-add-question-function" >
                    <label>{a+1}. Escribe tu pregunta:</label>
                    <input type="text" required name="question" onChange={(e) => changerQuestioQuiz(e,a)} />
                    <div className="Question-function-Options">
                        {AddAnswerQuestion(a)}
                        <button type="button" onClick={() => {
                            let newdata = [...Saveopciones];
                            if(!newdata[a]){
                                newdata[a] = 0;
                            }
                            newdata[a] = newdata[a] + 1;
                            setSaveopciones(newdata);
                        }} >Añadir respuestas</button>

                    </div>
                </div>
            );
        }
        return Question;
    }
    
    function AddAnswerQuestion(i){
        let Answer = [];
        for(let a = 0; a < Saveopciones[i]; a++){
            if(a === 0){
                Answer.push(
                    <div key={a} >
                        <label>A. </label>
                        <input type="text" required onChange={(e) => chagerOptionsQuiz(e,i,a)} />
                        <input type="radio" required name={i} onChange={() => changerQualificationQuiz(i,a)} />
                    </div>
                );
            }else if(a === 1){
                Answer.push(
                    <div key={a} >
                        <label>B. </label>
                        <input type="text" required onChange={(e) => chagerOptionsQuiz(e,i,a)} />
                        <input type="radio" required name={i} onChange={() => changerQualificationQuiz(i, a)} />
                    </div>
                );
            }else if(a === 2){
                Answer.push(
                    <div key={a} >
                        <label>C. </label>
                        <input type="text" required onChange={(e)=> chagerOptionsQuiz(e,i,a)}/>
                        <input type="radio" required name={i} onChange={() => changerQualificationQuiz(i, a)} />
                    </div>
                );                
            }else if(a === 3){
                Answer.push(
                    <div key={a} >
                        <label>D. </label>
                        <input type="text" required onChange={(e)=> chagerOptionsQuiz(e, i, a)} />
                        <input type="radio" required name={i} onChange={() => changerQualificationQuiz(i,a)} />
                    </div>
                );
            }
        }
        return Answer;
    }

    const [Quizadd, setQuizadd] = useState({
        title: '',
        description: '',
        questions:[
            {
                question: 'a',
                options: [
                    {
                        option: '',
                        qualification: 0
                    }
                ]
            }
        ]
    });

 
    function changerTitleQuiz({target:{name, value}}){
        setQuizadd({...Quizadd, [name]: value});
    }

    function changerQuestioQuiz({target:{name, value}}, i){
        let newdata = {...Quizadd};
        if(!newdata.questions[i]){
            newdata.questions[i] =  {
                question: '',
                options: [
                    {
                        option: '',
                        qualification: 0
                    }
                ]
            }
        }
        newdata.questions[i][name] = value;
        setQuizadd(newdata);
    }

    function chagerOptionsQuiz({target:{value}}, indexQuestions, indexOptions){
        let newdata = {...Quizadd};
        if(!newdata.questions[indexQuestions].options[indexOptions]){
            newdata.questions[indexQuestions].options[indexOptions] = {
                option: '',
                qualification: 0
            }
        }
        newdata.questions[indexQuestions].options[indexOptions].option = value;
        setQuizadd(newdata);
    }

    function changerQualificationQuiz(indexQuestions, indexOptions){
        let newdata = {...Quizadd};
        for(let a = 0 ; a < newdata.questions[indexQuestions].options.length; a++){
            newdata.questions[indexQuestions].options[a].qualification = 0;
        }
        newdata.questions[indexQuestions].options[indexOptions].qualification = 1;
    }

    async function HandleSubmitQuiz(e){
        e.preventDefault();
        const {data} = await PostQuiz(Quizadd);
        console.log(data);
    }

    return(
        <ExamContext.Provider value={{AddQuestion, changerTitleQuiz, NumQuestion, setNumQuestion, HandleSubmitQuiz}}>
            {children}
        </ExamContext.Provider>
    );
}