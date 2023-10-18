import React from 'react';
import {useDroppable} from '@dnd-kit/core';
export  function Droppable2(props) {
    const {setNodeRef} = useDroppable({
      id: props.id,
    });
    
    return (
      <div ref={setNodeRef} className={props.className}>
        {props.children}
      </div>
    );
  }