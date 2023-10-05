import React from 'react'
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FormCreator = () => {
    return (
        <div className='contact'>
            <div className="container">
                <div className='row'>

                    <div className="form-container">
                        <form>
                            <h1><span>Create forms</span> Us</h1>
                            <div className='createdFormsContainer'>
                                <div className='formItemBox'>

                                </div>
                                <div className='formItemBox'>
                                    <Link to='/newForm'>
                                        <div className='formItemNew'>
                                            <FaPlus size={60} />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FormCreator
