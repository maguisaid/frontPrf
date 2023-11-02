import React from 'react';
import { Link } from 'react-router-dom';
import './InformacionEmpresa.css';
import imagenEjemplo from './picture.png';

const InformacionEmpresa = () => {
  return (
    <div className="InformacionEmpresa">

        <div className="content">
          <h2>¿Qué información necesitas tener antes de medir la huella de tu empresa?</h2>
          <p>
            Antes de calcular la huella de carbono de tu empresa, es importante reunir la siguiente información:
          </p>
          <ul>
            <li>
              <strong>Alcance 1 (emisiones directas):</strong> Debes saber las cantidades y tipos de combustibles consumidos por año en equipos y vehículos propios o de la empresa.
            </li>
            <li>
              <strong>Alcance 2 (emisiones indirectas por energía):</strong> Debes conocer la cantidad de electricidad consumida por año (en kWh) en todas las instalaciones de la empresa.
            </li>
            <li>
              <strong>Alcance 3 (otras emisiones indirectas):</strong> Debes tener información sobre:
              <ul>
                <li>La suma total de kilómetros en viajes de negocios o comerciales, ya sean aéreos, terrestres o fluviales.</li>
                <li>La suma total de kilómetros recorridos en los viajes de los empleados desde su vivienda hasta el lugar de trabajo.</li>
                <li>La cantidad de kilogramos de residuos orgánicos generados en la empresa.</li>
                <li><strong>Nuevo:</strong> El número de empleados que hacen teletrabajo y los días que utilizan esa modalidad.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="additional-info">
          <h2>¿Cuánto tiempo necesita para calcular su huella?</h2>
          <p>Una vez recopilada la información necesaria, va a necesitar entre 15 y 20 minutos para cargarla en la calculadora.</p>
          <p>Pero si necesita más tiempo, no se preocupe, puede retomar en otro momento. Si usa el mismo dispositivo (celular, tablet o computadora) y la misma conexión a internet, sus respuestas quedan guardadas para cuando vuelva a ingresar.</p>
          <h2>¿Qué período estoy midiendo?</h2>
          <p>Está midiendo el último año calendario.</p>
          <p>Ejemplo: Si está midiendo/compensando la huella de su empresa en 2023 deberá
          considerar el cálculo de 2022</p>
        </div>

        <div className="image-container">
          <img src="picture.png" alt="Descripción de la imagen" />
        </div>

        <div className="btn-MideTuHuella">Medí tu Huella</div>

    </div>
  );
}

export default InformacionEmpresa;
