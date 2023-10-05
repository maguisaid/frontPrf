import { useState } from 'react';
import { nanoid } from "nanoid";
import WrittenInputQuestion from './WrittenInputQuestion';
import { FaPlus } from "react-icons/fa6";

function WrittenInput(props) {
  const [questionList, setQuestionList] = useState([]);

  function addQuestion() {
    const newQuestion = { id: "todo-" + nanoid() };
    setQuestionList([...questionList, newQuestion]);
    props.onAdd(newQuestion)
  }

  function deleteQuestion(id) {
    const remainingQuestions = questionList.filter((question) => id !== question.id);
    setQuestionList(remainingQuestions);
    props.deleteQuestion(id)
  }

  function onQuestionTitleChanged(id,changedProperties){    
    let questionSection = questionList.find((question) => id == question.id);
    questionSection = {...questionSection,...changedProperties};
    let filteredList = questionList.filter((question) => id != question.id)
    filteredList.push(questionSection)
    setQuestionList(filteredList);
    props.onChangeTitle(id,changedProperties)
  }

  const questionElementsList = questionList
    .map((question) => (
      <WrittenInputQuestion
        id={question.id}
        key={question.id}
        deleteQuestion={deleteQuestion}
        onQuestionTitleChanged={onQuestionTitleChanged}
      />

    ));
  return (
    <>
      {questionElementsList}
      <button className="invisible clickable grey-btn just-center" onClick={addQuestion}><div className='formItemNew-sm grey-btn '>
        <FaPlus size={30} />
      </div></button>

    </>


  )
}

export default WrittenInput;
