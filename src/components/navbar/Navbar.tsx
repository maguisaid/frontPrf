import React, { useState } from 'react';
import { SiDatabricks } from 'react-icons/si';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div data-name='top' className='navbar'>
      <div className="container">
      <div className="logo">
  <img src={logo} alt="BDT GLOBAL Logo" className="logo-image" style={{ width: '180px', height: 'auto' }} />
       </div>
        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
