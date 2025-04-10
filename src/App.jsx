import React from 'react';
import { useState,  useEffect, useRef } from 'react';
import './App.css';

import Header from './components/Header';
import ContentSection from './components/ContentSection';
import Servicios from './components/Servicios';
import ProyectosRecientes from './components/ProyectosRecientes';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';

export default function App() {
   const [loading, setLoading] = useState(true);
   const [menuOpen, setMenuOpen] = useState(false);
// 🔸 Creamos las referencias
  const serviciosRef = useRef(null);
  const proyectosRef = useRef(null);
  const preguntasRef = useRef(null);
  const HomeRef = useRef(null);

const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServicios = () => {
    serviciosRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProyectos = () => {
    proyectosRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPreguntas = () => {
    preguntasRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
  
      <Header 
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      scrollToHome={scrollToHome}
      scrollToServicios={scrollToServicios}
      scrollToProyectos={scrollToProyectos}
      scrollToPreguntas={scrollToPreguntas}/>
      <ContentSection ref={HomeRef}/>
      <Servicios ref={serviciosRef}/>
      <ProyectosRecientes ref={proyectosRef}/>
      <PreguntasFrecuentes ref={preguntasRef}/>
    </>
  );
}
