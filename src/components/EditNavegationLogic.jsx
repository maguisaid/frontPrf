import {DndContext} from '@dnd-kit/core';
import Droppable from './Droppable';
import Draggable from './Draggable';
import Chip from './Chip'
import { rectSortingStrategy } from "@dnd-kit/sortable";
import { MultipleContainers } from "./MultipleContainers";
export default function EditNavigationLogic(props) {


  return (
    <div className="editNavLogic">
        <h2>Editar Logica de navegacion</h2>
        <div>
            <p>Pruesbas de Drag and drop</p>
            <div>
            <DndContext>
                <Draggable id={1234}>
                    <Chip text="Laruwu" color="red"/>
                    </Draggable>
                                    <Draggable id={1233424}>
                    <Chip text="Laruwu" color="red"/>
                    </Draggable>
                    <Droppable>
                        <div>
                            Jiaiii
                        </div>
                    </Droppable>
    </DndContext>
          {/* <MultipleContainers
        itemCount={5}
        strategy={rectSortingStrategy}
        vertical
      /> */}
            </div>
        </div>
    </div>
  );
}
