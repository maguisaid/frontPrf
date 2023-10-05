import React from 'react'

import NewForm from '../components/NewForm'
const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false },
  ];
const FormCreatorPage = () => {
    return (
        <>
           <NewForm tasks={DATA}/>
        </>
    )
}

export default FormCreatorPage
