import React, { useState, useEffect } from 'react';
import { nanoid } from "nanoid";
import Todo from "./Todo";
import WrittenInput from './WrittenInput';
import EditNavegationLogic from './EditNavegationLogic';
import { RiDeleteBin6Fill,RiSettings5Fill } from "react-icons/ri";

function EditQuestionSection(props) {
  const [questionList, setQuestionList] = useState([]);
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [logicSettingsOpen, setLogicSettingsState] = useState(false);

  function handleQuestionTitleChange(e) {
    setQuestionTitle(e.target.value);
  }

  const questionElementsList = questionList
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
      />
    ));

  const questionTypeElementList = selectquestionTypeElementList(questionType);


  function selectquestionTypeElementList(questionTypeName) {
    console.log("selecting", questionTypeName)

    switch (questionTypeName) {
      case 'writtenInput':
        console.log("in writen inut");
        return <WrittenInput
          deleteQuestion={deleteQuestion}
          onChangeTitle={titleChangedQuestion}
          onAdd={onAddQuestion}
        />
        break;
      case 'multipleChoice':
        return <h1>Haii multpl shari {questionTypeName}</h1>
        break;
      default:
        <h2>Unu</h2>
        break;
    }
  }


  function handleAdd(e) {
    if (!questionTitle.trim()) {
      return;
    }
    addQuestion(questionTitle);
    setQuestionTitle("");
  }

  function addQuestion(name) {
    console.log("addQuestion",name)
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setQuestionList([...questionList, newTask]);
  }

  function questionTypeChanged(event) {
    console.log("question tyeo changed")
    setQuestionType(event.target.value)


  }
  useEffect(() => {
    const tx = document.getElementsByTagName("textarea");
    for (let i = 0; i < tx.length; i++) {
      tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
      tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
      this.style.height = 0;
      this.style.height = (this.scrollHeight) + "px";
    }
  }, []);

  function deleteQuestion(id) {
    props.deleteQuestion(props.id, id)
  }
  
  function titleChangedQuestion(id,changedProperties) {
    props.questionTitleChanged(props.id, id,changedProperties)
  }

  function onAddQuestion(newQuestion){
    props.onAddQuestion(props.id,newQuestion)
  }

  function onChanged(value, propertyName) {
    props.onQuestionSectionChange(props.id, { [propertyName]: value })
  }
  function onLogicStatementInput(idSeccion,listaStatements){
    console.log(idSeccion,"idSeccion")
    console.log(listaStatements,"listaStatements")
onChanged(listaStatements,"statements")
  }

  return (
    <div className='createdFormsContainer'>
      <div className='row'>
        <div className={(logicSettingsOpen?"col-5":"col-10")}>
          <h2>
            <textarea rows={1} onInput={(event) => onChanged(event.target.value, "title")} className="transparent-input formQuestionSectionTitle" name="fname" placeholder='Question Title...'></textarea>
          </h2>
          {questionTypeElementList}
        </div>
        <div className={(logicSettingsOpen?"col-7":"col-2")}>
          <div className='row justify-content-end'>
            <div className=''>
            <button type='button' onClick={() => { props.deleteQuestionSection(props.id) }} className='invisible clickable just-center questionSectionButton'><div className='formItemNew-sm primary-btn'>
            <RiDeleteBin6Fill size={30} />
          </div>
          </button>

                        <button type='button' onClick={() => { setLogicSettingsState(!logicSettingsOpen) }} className='invisible clickable just-center questionSectionButton'><div className='formItemNew-sm primary-btn'>
            <RiSettings5Fill size={30} />
          </div>
          </button>
            </div>


          </div>
<div className={"row " + (logicSettingsOpen?"":"disapear")}>
<EditNavegationLogic
idSeccion={props.id}
onLogicStatementInput={onLogicStatementInput}
/>
</div>

        </div>

      </div>

      <label htmlFor="questionType">Question Type:</label>

      <select name="questionType" id="questionType" onChange={questionTypeChanged}>
        <option value="multipleChoice">Multiple choice</option>
        <option value="writtenInput">Written input</option>
      </select>
      <div className="container">
        <div className="row justify-content-between">
          <div className='row justify-content-center'>            
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditQuestionSection;
