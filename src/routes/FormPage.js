import React from 'react'

import Form from '../components/Form'
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
const FormPage = (props) => {
    const { id } = useParams();

    return (
        <>
        <Navbar /> 
           <Form json={props.jsonForm} id={id}/>
           <Footer />
        </>
    )
}

export default FormPage
