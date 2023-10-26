import { useState } from 'react'
import { Draggable } from './Draggable';
import Chip from './Chip'
import { nanoid } from "nanoid";
import ChipListReorderable from './ChipListReorderable';


export default function EditNavigationLogic(props) {
  const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState(null);
  const [droppables, setDroppables] = useState([{ id: 1, value: 'Pregunta 1', belongs: -1 }, { id: 2, value: 'Pregunta 2', belongs: -1 }]);
  const [logicStatements, setLogicStatements] = useState([{id:nanoid()}]);
  const defaultChipBoxContainerId = -1;
  const draggableMarkup = (<>
    {droppables.filter(droppable => droppable.belongs === defaultChipBoxContainerId).map((id) => (
        <Draggable id={id.id} key={id.id}>
            <Chip color={"red"} text={id.value} />
        </Draggable>
    ))}
</>
);

function onLogicStatementsChanged(logicStatements){
  console.log("logicStatements",logicStatements)
  // let foundElement = logicStatements.find(element=>element.id===id)
  // foundElement.value = value;
  setLogicStatements(logicStatements)
  props.onLogicStatementInput(props.idSeccion,logicStatements)
}

  return (<>

<ChipListReorderable  onChange={(statements)=>onLogicStatementsChanged(statements)}/>

    </>
  );
  function printDrop() {
    console.log("jai", droppables)
  }
  function handleDragEnd(event) {
    const { over } = event;
    console.log("event", event)
    setDroppables(droppables.flatMap(droppable => {
      if(event?.over?.id==null)
      return droppable;
      console.log("droppable", droppable)
      console.log("defaultChipBoxContainerId", defaultChipBoxContainerId)
      if (droppable.id === event.active.id && droppable.belongs === defaultChipBoxContainerId)
        return [droppable, { ...droppable, id: nanoid(), belongs: event.over.id }]

      if (droppable.id === event.active.id) {
        return { ...droppable, belongs: event.over.id }
      }
      return droppable;
    }))
    console.log("jai", droppables)
    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }































  // const [isDropped, setIsDropped] = useState(false);
  // const draggableMarkup = (
  //   <Draggable><Chip text="Laruwu" color="red"/></Draggable>
  // );



  // function handleDragEnd(event) {
  //   if (event.over && event.over.id === 'droppable') {
  //     setIsDropped(true);
  //   }
  // }
  // return (
  //   <DndContext onDragEnd={handleDragEnd}>
  //     {!isDropped ? draggableMarkup : null}
  //     <Droppable>
  //       <div className='droppableChipBox'>

  //       {isDropped ? draggableMarkup : 'Drop here'}
  //       </div>

  //     </Droppable>
  //   </DndContext>
  // );
}
