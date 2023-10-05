import React from 'react';
import { SiDatabricks } from 'react-icons/si';
import { FiMail, FiPhone } from 'react-icons/fi';
import './FooterStyles.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="info-columns">
          <div className="column">
            <h3>Argentina</h3>
            <p>Maipú 311, Piso 16 · (C1006ACA), Buenos Aires</p>
            <p><FiPhone /> +54 11 5368 8042</p>
          </div>
          <div className="column">
            <h3>USA</h3>
            <p>Suite 330 3401 SW 160TH Ave · Miramar, FL 33027</p>
            <p><FiPhone /> +17864085611</p>
          </div>
          <div className="column">
            <h3>Contact</h3>
            <p><FiMail /> info@bdtglobal.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
