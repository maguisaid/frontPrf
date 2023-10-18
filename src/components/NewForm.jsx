import { useState } from "react";
import { nanoid } from "nanoid";
import { FaArrowLeftLong, FaPlus } from "react-icons/fa6";
import EditQuestionSection from './EditQuestionSection'
import { useNavigate } from 'react-router-dom';
import ChipListReorderable from './ChipListReorderable'

const NewForm = (props) => {
  const navigate = useNavigate();
  const [questionSectionList, setQuestionSectionList] = useState([]);
  const [formTitle, setFormTitle] = useState("");

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

  const questionSectionElementList = questionSectionList
    .map((questionSection) => (
      <EditQuestionSection
        id={questionSection.id}
        key={questionSection.id}
        deleteQuestionSection={deleteQuestionSection}
        deleteQuestion={deleteQuestion}
        onQuestionChange={onQuestionChange}
        onQuestionSectionChange={onQuestionSectionChange}
        questionTitleChanged={questionChanged}
        onAddQuestion={addQuestion}
      />
    ));

  function getQuestionSection(id) {
    return questionSectionList.find(questionSection => questionSection.id === id);
  }

  function addQuestion(idSection, newQuestion) {
    getQuestionSection(idSection).questionList.push(newQuestion);
    setQuestionSectionList(questionSectionList);
  }

  function addQuestionSection() {
    const newQuestionSection = { id: "todo-" + nanoid(), title: "", questionList: [], type: "writtenInput" };
    setQuestionSectionList([...questionSectionList, newQuestionSection]);
  }

  function getJsonFromNewForm() {
    questionSectionList[0].visible = true

    questionSectionList.map(element=>
      element.map
      )

    return {
      title: formTitle,
      questionSections: questionSectionList
    };
  }

  function saveForm() {
    console.log("ohayo", props.json)
    console.log("Form JSON: ", getJsonFromNewForm());
  }

  function previsualizar() {
    console.log("previsualizar")
    navigate("/form",
      {
        state: {
          jsonForm: getJsonFromNewForm()
        }
      })
  }

  return (
    <>
      <div className="container-fluid">
        <div className='row justify-content-center'>
          <div className="col-11">
            <div className="row">
              <div className="col-2">
                <div className="row mr-auto">
                  <button className='invisible clickable' onClick={() => navigate(-1)}><div className='formItemNew primary-btn'>
                    <FaArrowLeftLong size={60} />
                  </div></button>
                </div>
              </div>
              <div className="col-10">
                <div className="innerFormContainer">
                  <input type="text" className='transparent-input' id="formTitle" name="fname" placeholder='Form Title...' onInput={(event) => setFormTitle(event.target.value)}></input>
                  {questionSectionElementList}
                  <button className="invisible clickable just-center primary-btn" onClick={addQuestionSection}><div className='formItemNew-sm primary-btn'>
                    <FaPlus size={30} />
                  </div></button>
                </div>
                <button type="button" onClick={saveForm}>
                  Save
                </button>
                <button type="button" onClick={previsualizar}>
                  Previsualizar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChipListReorderable id='A' />
    </>
  );
}

export default NewForm
