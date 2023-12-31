import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './NavbarStyles.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false); 
  const [showPopup2, setShowPopup2] = useState(false); 
  const [popupContent, setPopupContent] = useState("");

  const handleNav = () => setNav(!nav);

  const togglePopup1 = (content: string) => { 
    setShowPopup1(!showPopup1);
    setPopupContent(content);
  };
  
  const togglePopup2 = (content: string) => { 
    setShowPopup2(!showPopup2);
    setPopupContent(content);
  };

  return (
     <div data-name='top' className='navbar'>

        <div className="logo">
           <Link to='/'>
               <img src={logo} alt="BDT GLOBAL Logo" className="logo-image" style={{ width: '180px', height: 'auto' }} />
           </Link>
        </div>

        
         <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
         <li>
           <Link to='/' className="logo-text" style={{ textDecoration: 'none', color: '#544eeb' }}>Home</Link>
         </li>


         <li>
           <span className="question" onClick={() => togglePopup1("La huella de carbono es una métrica que se utiliza para calcular estimativamente la cantidad de gases de efecto invernadero que emitimos hacia la atmosfera. Especialmente dióxido de carbono (CO2), y otros gases, liberados como resultado de las actividades humanas o la producción y consumo de bienes y servicios. Estos gases de efecto invernadero atrapan el calor en la atmósfera y contribuyen al calentamiento global y al cambio climático. La huella de carbono se expresa generalmente en términos de toneladas métricas de dióxido de carbono equivalente (ECO2e), que es una medida que combina las emisiones de diferentes gases de efecto invernadero en una única unidad, basándose en su potencial de calentamiento global a lo largo de un período específico.")}>
             ¿Qué es la huella de carbono?
           </span>
  {showPopup1 && (
    <div className="popup">
      <div className="popup-content">
        <p className="popup-text">{popupContent}</p>
      </div>
      <button className="btn-MideTuHuella" onClick={() => togglePopup1(popupContent)}>Cerrar</button>
    </div>
  )}
        </li>
        
        <li>
  <span className="question" onClick={() => togglePopup2("Para evitar la huella de carbono, podemos tomar varias medidas, incluyendo:\n\n1. Reducir el consumo de energía: Utilizar fuentes de energía renovable y reducir el consumo de energía en el hogar y en la empresa.\n2. Fomentar el transporte sostenible: Usar medios de transporte más eficientes y compartir viajes.\n3. Reducir el desperdicio de alimentos: Comprar y consumir alimentos de manera más consciente y reducir el desperdicio de alimentos.\n4. Promover la reforestación: Plantar árboles y cuidar de los bosques para capturar el carbono.\n5. Apoyar la energía limpia: Invertir en energías renovables y apoyar la transición a una economía baja en carbono.")}>
    ¿Qué podemos hacer para evitarla?
  </span>
  {showPopup2 && (
    <div className="popup">
      <div className="popup-content">
        <p className="popup-text">{popupContent}</p>
      </div>
      <button className="btn-MideTuHuella" onClick={() => togglePopup2(popupContent)}>Cerrar</button>
    </div>
  )}
      </li>

      </ul>

   </div>
  );
};

export default Navbar;
