import { useEffect } from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";

function WrittenInputQuestion(props) {
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
  return (
    <>
      <div className='question-box'>
        <div className='row'>
          <div className='col-7'>
            <textarea rows={1} className="transparent-input formQuestionTitle" name="fname" placeholder='Question Title...' onInput={(event)=>props.onQuestionTitleChanged(props.id,{"title":event.target.value})}></textarea>

          </div>
          <div className='col-3'>
            <textarea rows={1} className="borderless formQuestionHint" name="fname" placeholder='Type your hint here' onInput={(event)=>props.onQuestionTitleChanged(props.id,{"hint":event.target.value})}></textarea>

          </div>
          <div className='col-2' style={{ display: "inline-flex" }}>
            <button type='button' onClick={() => props.deleteQuestion(props.id)} className='invisible clickable just-center' style={{ padding: "0px" }}><div className='formItemNew-sm primary-btn'>
              <RiDeleteBin6Fill size={30} />
            </div>
            </button>
          </div>


        </div>

      </div>
    </>


  )
}

export default WrittenInputQuestion;
