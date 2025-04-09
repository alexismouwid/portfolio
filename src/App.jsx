import React from 'react';
import { useState,  useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import ContentSection from './components/ContentSection';
import Servicios from './components/Servicios';
import ProyectosRecientes from './components/ProyectosRecientes';

export default function App() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if(loading) {
    return (
<div className="loading-bar">Loading</div>
   );
  }  
  return (
    <>
  
      <Header />
      <ContentSection />
      <Servicios />
      <ProyectosRecientes />
    </>
  );
}
