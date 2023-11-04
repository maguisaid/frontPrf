import React from 'react';
import './CloudStyles.css';
import { Link } from 'react-router-dom';

const Cloud = () => {
  return (
    <div className='cloud'>
        <div className='content'>
          <h2>Medí tu Huella de Carbono</h2>
          <p>
            Podes calcular tus emisiones, respondiendo unas preguntas sencillas
            sobre tus actividades, estilo de vida y uso de recursos.
          </p>
          <div>
          <h6>EMPEZÁ AHORA</h6>
          </div>
          <div>
            <button className="primary-btn">
              <Link to='/formCreator'>IR AL BACKOFFICE</Link>
            </button>
          </div>
          <div>
            <button className="primary-btn">
              <Link to="/informacion">INDIVIDUO</Link>
            </button>
            <button className="primary-btn">
              <Link to="/informacionEmpresa">EMPRESA</Link>
            </button>
          </div>
        </div>
    </div>
  );
};

export default Cloud;
