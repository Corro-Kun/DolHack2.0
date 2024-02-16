import React,{useContext, createContext, useState} from "react";
import {PostQuiz, GetQuiz, GetQuizById, AnswerForm, DeleteQuiz, GetQuizByIdD, UpdateQuiz} from "../api/exam";
import {useNavigate} from "react-router-dom"

const ExamContext = createContext();

export function useExam(){
    return useContext(ExamContext);
}

export function ExamProvider({children}){
    const navigate = useNavigate();
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
                        <button style={{margin: "10px"}} 
                        type="button"
                        onClick={()=>{
                            let newdata = [...Saveopciones];
                            if(!newdata[a]){
                                newdata[a] = 0;
                            }
                            newdata[a] = newdata[a] - 1;
                            setSaveopciones(newdata);   
                            let newdata2= {...Quizadd};
                            newdata2.questions[a].options.pop();
                            setQuizadd(newdata2);    
                        }}
                        >Eliminar respuesta</button>
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
        navigate("/class/teacher/exam");
    }

    const [Quizs, setQuizs] = useState([]);

    async function GetQuizs(){
        const {data} = await GetQuiz();
        setQuizs(data);
    }

    const [QuizId, setQuizId] = useState({
        idquiz: '',
        titulo: '',
        descripcion: '',
        preguntas:[]
    });

    async function GetQuizId(id){
        const {data} = await GetQuizById(id);
        setQuizId(data);
    }

    const [QuizAnswer, setQuizAnswer] = useState({
        respuestas:[
            {
                opcion: '',
                respuesta: '',
                calificacion: 0,
                pregunta_idpregunta: ''
            }
        ]
    });

    function changerAnswer(opcion, respuesta, calificacion, pregunta_idpregunta, i){
        let newdata = {...QuizAnswer};
        newdata.respuestas[i] = {
            opcion: opcion,
            respuesta: respuesta,
            calificacion: calificacion,
            pregunta_idpregunta: pregunta_idpregunta
        }
        setQuizAnswer(newdata);
    }

    async function handleSubmitAnswer(e, id){
        e.preventDefault();
        const {data} = await AnswerForm(id, QuizAnswer);
        navigate("/class/student/home");
    }

    async function DeleteQuizs(id){
        const {data} = await DeleteQuiz(id);
        GetQuizs();
    }

    const [EQuizs, setEQuizs] = useState({
        idquiz: '',
        titulo: '',
        descripcion: '',
        preguntas:[
            {
                idpregunta: '',
                pregunta: '',
                opciones:[
                    {
                        idopcion: '',
                        opcion: '',
                        respuesta: '',
                        calificacion: 0,
                        pregunta_idpregunta: ''
                    }
                ]
            }
        ]
    });

    async function GetEQuizs(id){
        const {data} = await GetQuizByIdD(id);
        setEQuizs(data);
    }

    function changerUpdateQuizs({target:{name, value}}, pi, oi, conditions){
        if(conditions === "m"){
            let data = EQuizs;
            data = {...data, [name]: value};
            setEQuizs(data);
        }else if(conditions === "p"){
            let data = EQuizs;
            data.preguntas[pi] = {...data.preguntas[pi], [name]: value};
            setEQuizs(data);
        }else if(conditions === "o"){
            let data = EQuizs;
            data.preguntas[pi].opciones[oi] = {...data.preguntas[pi].opciones[oi], [name]: value};
            setEQuizs(data);
        }
    }

    async function UpdateQuizs(id){
        try{
            const {data} = await UpdateQuiz(id, EQuizs);
            navigate("/class/teacher/exam");
        }catch (error){
            console.log(error);
        }
    }

    return(
        <ExamContext.Provider value={{AddQuestion, changerTitleQuiz, NumQuestion, setNumQuestion, HandleSubmitQuiz, GetQuizs, Quizs, GetQuizId, QuizId, changerAnswer, handleSubmitAnswer, DeleteQuizs, GetEQuizs, EQuizs, changerUpdateQuizs, UpdateQuizs}}>
            {children}
        </ExamContext.Provider>
    );
}