import { useState } from "react";
import { nanoid } from "nanoid";
import { useLocation } from 'react-router-dom';

const Form = (props) => {
    const { state } = useLocation();
    const { jsonForm } = state;
    const [questionSectionList, setQuestionSectionList] = useState([...jsonForm.questionSections]);
    const [answerList,setAnswerList] = useState([]);

    function deleteQuestionSection(id) {
        const remainingQuestionSections = questionSectionList.filter((questionSection) => id !== questionSection.id);
        setQuestionSectionList(remainingQuestionSections);
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

    const questionList = questionSectionList.filter(questionSection => questionSection.visible === true).map(questionSection => (
        <>
            <h2 className="questionSectionTitle" key={"h2-title-"+ questionSection.id}>{questionSection.title}</h2>
            {questionSection.questionList.map(question => (
                <>
                    <h5>{question.title}</h5>
                    <input key={"key-" + question.id} placeholder={question.hint} onInput={(event)=>onQuestionInput(questionSection.id,question.id,event.target.value)}></input>
                </>
            ))}
        </>
    ))
    
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
                                    <h1 className='formTitle'>{jsonForm.title}</h1>
                                    {questionList}
                                    {/* {questionSectionElementList} */}
                                </div>
                                <button type="button" onClick={nextQuestion}>
                                    Proxima pregunta
                                </button>
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
