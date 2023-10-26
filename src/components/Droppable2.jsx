import React from 'react';
import {useDroppable} from '@dnd-kit/core';
export  function Droppable2(props) {
    const {setNodeRef,isOver} = useDroppable({
      id: props.id,
    });
    function shart(){
      console.log("lare",isOver)
      console.log("props.onlyShowOnHover",props.onlyShowOnHover)
      console.log("props.props.isFirst",props.isFirst)
    }
    return (
      <div ref={setNodeRef} className={props.className + " " + (isOver?"":"clear")}>
        {props.children}
      </div>
    );
  }