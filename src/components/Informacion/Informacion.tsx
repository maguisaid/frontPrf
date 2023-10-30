import React from 'react';
import { Link } from 'react-router-dom';
import './Informacion.css';

const Informacion = () => {
  return (
    <div>
      <div className="Informacion">
        <div className="content">
          <h2>¿Qué necesito para comenzar?</h2>
          <p>
            Te vamos a hacer preguntas sencillas sobre tus actividades, estilo de vida y uso de recursos. Para responder con mayor agilidad, ten a mano tus facturas de gas y electricidad, vas a necesitar algunos datos que aparecen allí.
          </p>
        </div>
        <div className="additional-info">
          <h2>¿Cuánto tiempo necesito para calcular mi huella?</h2>
          <p>Entre 10 y 15 minutos. Pero si necesitas más tiempo, no te preocupes, podes retomar en otro momento.</p>
          <h2>¿Qué período estoy midiendo?</h2>
          <p>Tené en cuenta que estás midiendo/compensando tu huella del último año, "es decir los últimos 12 meses. Ejemplo: Si estás midiendo tu huella en febrero de 2023, calcula los últimos 12 meses desde febrero de 2022.</p>
        </div>
        <div className="btn-MideTuHuella">Medí tu Huella</div>
      </div>
    </div>
  );
}

export default Informacion;
