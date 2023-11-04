import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import CONFIG from '../config';
const Form = (props) => {
    const { state } = useLocation();
    const { jsonForm } = state??{};
    const [formData, setFormData] = useState({});
    const [questionSectionList, setQuestionSectionList] = useState([]);
    const [answerList,setAnswerList] = useState([]);

    function deleteQuestionSection(id) {
        const remainingQuestionSections = questionSectionList.filter((questionSection) => id !== questionSection.id);
        setQuestionSectionList(remainingQuestionSections);
    }
    useEffect(() => {
        getFormWithFetch();
      }, []);

      const getFormWithFetch = async () => {
        const formEndpoint = `/form/${props.id}`
        const response = await axios.get(CONFIG.FORMS_API_BASE_URL+formEndpoint);
        console.log("response.data",response.data.data.form)
        setFormData(response.data.data.form);
        console.log(response.data.data.form.screens)
        let listOfQuestions = response.data.data.form.screens.map((screen,index)=>{
            if(index==0)
            screen.visible = true;
        else screen.visible = false;
        return screen})
        setQuestionSectionList(listOfQuestions);
      };

      function parseForm(){
        
      }

    function deleteQuestion(idQuestionSection, idQuestion) {
        let questionSection = questionSectionList.find((questionSection) => idQuestionSection == questionSection.id);
        questionSection.questionList = questionSection.questionList.filter((question) => idQuestion != question.id)
        setQuestionSectionList(questionSectionList);
    }

    function onQuestionChange(idQuestionSection, question) {
        // let actualQuestion = questionSectionList.find((questionSection) => idQuestionSection == questionSection.id);
        // questionSection = questionSection.questionList.filter((question) => idQuestion !== question.id);
        // setQuestionSectionList(questionSectionList.filter((questionSection) => idQuestionSection != questionSection.id).push(questionSection));
    }

    function onQuestionSectionChange(questionSectionId, questionSectionChangedProperties) {
        let questionSection = questionSectionList.find((questionSection) => questionSectionId === questionSection.id);
        console.log("questionSection", questionSection)
        questionSection = { ...questionSection, ...questionSectionChangedProperties };
        let filteredList = questionSectionList.filter((questionSection) => questionSectionId !== questionSection.id)
        filteredList.push(questionSection)
        setQuestionSectionList(filteredList);
    }

    function questionChanged(sectionId, questionId, changedProperties) {
        let newQuestionSectionList = questionSectionList.map(questionSection => {
            if (questionSection.id === sectionId)
                questionSection.questionList = questionSection.questionList.map(question => {
                    if (question.id === questionId)
                        question = { ...question, ...changedProperties }
                    return question;
                })

            return questionSection;
        })
        setQuestionSectionList(newQuestionSectionList);
    }
function getHTMLQuestion(questionSection){
if(questionSection.$type==="editTextScreen"){
return questionSection.options.map(question => (
    <>
        <h5>{question.label}</h5>
        <input key={"key-" + question.id} placeholder={question.hint} onInput={(event)=>onQuestionInput(questionSection.id,question.id,event.target.value)}></input>
    </>
))
}if(questionSection.$type==="radioButtonScreen"){
    return questionSection.options.map(question => (
        <>

                    <label className="radiobtn-label">
            <input type="radio" name="color" value={question.label}/> {question.label}
            
        </label>
        <br/>
        </>
    ));
}
}
    const questionList = Array.isArray(questionSectionList)?questionSectionList.map(questionSection => questionSection.visible?(
        <>
            <h2 className="questionSectionTitle" key={"h2-title-"+ questionSection.screenId}>{questionSection.question}</h2>
            {/* {questionSection.options.map(question => (
                <>
                    <h5>{question.label}</h5>
                    <input key={"key-" + question.id} placeholder={question.hint} onInput={(event)=>onQuestionInput(questionSection.id,question.id,event.target.value)}></input>
                </>
                
            ))} */}
            {getHTMLQuestion(questionSection)}
        </>
    ):<></>) : <>Jaii</>
    //     const questionList = questionSectionList.filter(questionSection => questionSection.visible === true).map(questionSection => (
    //     <>
    //         <h2 className="questionSectionTitle" key={"h2-title-"+ questionSection.id}>{questionSection.title}</h2>
    //         {questionSection.questionList.map(question => (
    //             <>
    //                 <h5>{question.title}</h5>
    //                 <input key={"key-" + question.id} placeholder={question.hint} onInput={(event)=>onQuestionInput(questionSection.id,question.id,event.target.value)}></input>
    //             </>
    //         ))}
    //     </>
    // ))
    
    function onQuestionInput(questionSectionId,questionId,value){
        return setQuestionSectionList(questionSectionList.map(questionSection=>
            {
                if(questionSection.id===questionSectionId)
                questionSection.questionList = questionSection.questionList.map(question=>{
                    if(question.id===questionId)
                    question.value = value
                return question
                })
                return questionSection;
            }))
    }

function parseStatement(){
    return null
}

    function decideNextQuestion(answers, statementList) {
        console.log("answers",answers)
        return "default"
    }
async function getNextScreen(){
const options = questionSectionList.filter(screen=>screen.visible)[0].options
console.log("questionSectionList",questionSectionList)
console.log("options",options)
let postData = options;
    const formEndpoint = `/screen`
    let headers ={'formSharingId': props.id}
    const response = await axios.post(CONFIG.FORMS_API_BASE_URL+formEndpoint,postData,{headers});
    console.log("response.data",response)
    let nextScreenId = response.data.data.screenId;
    let newScreenList = questionSectionList.map(screen=>{
        if(screen.screenId==nextScreenId)
        screen.visible=true;
    else screen.visible=false;
    return screen;
    })
    setQuestionSectionList(newScreenList)
    // setFormData(response.data.data.form);
    // console.log(response.data.data.form.screens)
    // let listOfQuestions = response.data.data.form.screens.map((screen,index)=>{
    //     if(index==0)
    //     screen.visible = true;
    // else screen.visible = false;
    // return screen})
    // setQuestionSectionList(listOfQuestions);
}
function getAnswersFromQuestionSection(questionList){
return questionList.map(question=>question.value)
}

    function nextQuestion() {
        let currentQuestionSection = questionSectionList.find(element => element.visible===true);
        if(currentQuestionSection==null)
        return
        currentQuestionSection.visible = false;
        let nextQuestionSectionId = decideNextQuestion(currentQuestionSection);
        if(nextQuestionSectionId==="default")
        debugger;
        let nextQuestionSection = questionSectionList[questionSectionList.indexOf(currentQuestionSection)+1]
        if(nextQuestionSection==null)
        return
        nextQuestionSection.visible=true;
        let newQuestionSectionList = questionSectionList.map(questionSection=>{
            if(questionSection.id===currentQuestionSection.id)
            questionSection = currentQuestionSection;
            if(questionSection.id===nextQuestionSection.id)
            questionSection=nextQuestionSection;
return questionSection
        })
        setQuestionSectionList(newQuestionSectionList);
        console.log("questionSectionList",questionSectionList)
    }

    return (
        <>
            <div className="container-fluid">
                <div className='row justify-content-center'>
                    <div className="col-11">
                        <div className="row">
                            <div className="col-2">
                                <div className="row mr-auto">
                                </div>
                            </div>
                            <div className="col-10">
                                <div className="innerFormContainer">
                                    ID:{props.id}
                                    <h1 className='formTitle'>{formData.title}</h1>
                                    {questionList}
                                    {/* {questionSectionElementList} */}
                                </div>
                                {questionSectionList.find(screen =>screen.visible)?.isFinal ?
(<button type="button primary-btn btn" onClick={getNextScreen}>
Finalizar
</button>)
                                :
                            (<button type="button primary-btn btn" onClick={getNextScreen}>
                            Proxima pregunta2
                        </button>)
                            }
                                
                                {/* <button type="button" onClick={saveForm}>
                Save
              </button> */}
                                {/* <button type="button" onClick={previsualizar}>
                Previsualizar
              </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form
