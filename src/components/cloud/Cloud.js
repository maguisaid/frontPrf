import React from 'react';
import './CloudStyles.css';
import { Link } from 'react-router-dom';

const Cloud = () => {
  return (
    <div className='cloud'>
      <div className='container'>
        <div className='content'>
          <h2>Medí tu Huella de Carbono</h2>
          <p>
            Podes calcular tus emisiones, respondiendo unas preguntas sencillas
            sobre tus actividades, estilo de vida y uso de recursos.
          </p>
          <div>
          <button><Link to='/formCreator'>COMENZAR</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
