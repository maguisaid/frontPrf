import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import AboutPage from './routes/AboutPage'
import CloudPage from './routes/CloudPage'
import InformacionPage from './routes/InformacionPage'
import InformacionEmpresaPage from './routes/InformacionEmpresaPage'
import FormCreatorPage from './routes/FormCreatorPage';
import NewFormPage from './routes/NewFormPage';



ReactDOM.render(
  
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/cloud' element={<CloudPage />} />
      <Route path='/informacion' element={<InformacionPage />} />
      <Route path='/informacionEmpresa' element={<InformacionEmpresaPage />} />
      <Route path='/formCreator' element={<FormCreatorPage />} />
      <Route path='/newForm' element={<NewFormPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

