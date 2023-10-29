import React from 'react'
import Navbar from './components/navbar/Navbar';
import Cloud from './components/cloud/Cloud'
import Footer from './components/footer/Footer';
import Informacion from './components/Informacion/Informacion';

function App() {
  return (
    <>
      <Navbar />
      <Cloud />
      <Informacion/>
      <Footer />
    </>
  );
}

export default App;
