import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';


export default function Chip(props) {
  return (
    <div className='chip' style={{backgroundColor:props.color}}>
        {props.text}
    </div>
    );
}