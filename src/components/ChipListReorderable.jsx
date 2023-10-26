import { DndContext } from '@dnd-kit/core';
import { useState } from 'react'
import { Droppable2 } from './Droppable2';
import { Draggable } from './Draggable';
import Chip from './Chip'
import { nanoid } from "nanoid";

export default function ChipListReorderable(props) {
    const [droppables, setDroppables] = useState([{ id: 1, value: 'Preg', belongs: -1,type:"question" }, { id: 2, value: 'Pregunta 2', belongs: -1 ,type:"question"}, { id: 3, value: '>', belongs: -1 ,type:"logicOperator"}]);
    const defaultChipBoxContainerId = -1;
    const draggableMarkup = (<>
        {droppables.filter(droppable => droppable.belongs === defaultChipBoxContainerId).map((id) => (
            <Draggable id={id.id} key={id.id}>
                <Chip color={id.type==="question"?"DarkSlateBlue":"CornflowerBlue"} text={id.value} />
            </Draggable>
        ))}
    </>
    );


    function removeDraggable(draggablesList, draggableId) {
        return draggablesList.flatMap(draggable => {
            if (draggable.id === draggableId)
                return null;
            return draggable;
        })
    }

    function getDroppablesAndDraggables(droppables) {
        return droppables.map((element, index, array) =>
            <>
                <Draggable id={element.id} key={element.id}>
                    <Chip color={element.type==="question"?"DarkSlateBlue":"CornflowerBlue"} text={element.value} />
                </Draggable>
                <Droppable2 key={("droppable-" + (index + 1))} id={("droppable-" + (index + 1))} className="dropableSeparator" />
            </>
        )
    }
    return (
        <div className='chipListReorderableContainer'>
            <DndContext onDragEnd={handleDragEnd}>
                {draggableMarkup}
                <div className='droppableChipBox'>
                    <Droppable2 isFirst={true} onlyShowOnHover={true} key={"droppable-0"} id={"droppable-0"} className="dropableSeparator" />
                    {getDroppablesAndDraggables(droppables.filter(draggable => draggable.belongs !== defaultChipBoxContainerId))}
                    {/* {getDroppablesAndDraggables(droppables.filter(droppable => droppable.belongs === props.id))} */}
                </div>
            </DndContext>
        </div>
    );
    function orderDroppableBelong(droppablesList) {
        let belongsList = droppablesList.filter(draggable => draggable.belongs !== defaultChipBoxContainerId)
        belongsList = belongsList.map((draggable, index) => {
            draggable.belongs = "droppable-" + index;
            return draggable;
        })
        debugger
        return droppablesList.map(draggable => {
            let match = belongsList.find(belong => belong.id === draggable.id);
            if (match !== undefined)
                return match;
            return draggable;
        })
    }

    function insertDraggableAt(draggableList, newDraggable, index) {
        debugger
        (index == draggableList.length) ? draggableList.push(newDraggable) : draggableList.splice(index, 0, newDraggable);
        let newDroppablesListOrdered = orderDroppableBelong(draggableList)
        return newDroppablesListOrdered
    }

    function handleDragEnd(event) {
        debugger;
        
        const { over } = event;
        console.log(event)
        let newDroppable = null;
        let insertIndex = 0;
        let newDroppablesList = droppables.flatMap(droppable => {
            if (event?.over?.id == null)
                return droppable;
            if (droppable.id === event.active.id && droppable.belongs === defaultChipBoxContainerId) {
                newDroppable = { ...droppable, id: "draggable-" + nanoid(), belongs: event.over.id };
                insertIndex = event.over.id.split("-")[1]
                return droppable;
            }
            if (droppable.id === event.active.id) {
                debugger;
                newDroppable = { ...droppable, belongs: event.over.id }
                insertIndex = event.over.id.split("-")[1]
                return null;
            }
            return droppable;
        })
        newDroppablesList = newDroppablesList.filter(element => {
            return element !== null;
        });
        if (newDroppable !== null)
            newDroppablesList = insertDraggableAt(newDroppablesList, newDroppable, insertIndex)
        debugger;
        props.onChange(newDroppablesList.filter(draggable=>draggable.belongs !== defaultChipBoxContainerId))
        setDroppables(newDroppablesList)

        console.log("droppables", newDroppablesList)
    }
}
