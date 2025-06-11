import React from 'react';
import { useState,  useEffect, useRef } from 'react';

import { useIsMobile } from './utils/useIsMobile';
import { useDynamicCss } from './utils/useDynamicCss';
import { useN8nChat } from './utils/useN8nChat';
import { useDelayedLoading } from './utils/useDelayedLoading';

  
import Header from './componentstatic/Header';
import ContentSection from './componentstatic/ContentSection';
import Servicios from './componentstatic/Servicios';
import ProyectosRecientes from './componentstatic/ProyectosRecientes';
import PreguntasFrecuentes from './componentstatic/PreguntasFrecuentes';
import FloatingWhatsAppButton from './componentstatic/FloatingWhatsAppButton';

export default function App2( {toggleApp} ) {

  const [menuOpen, setMenuOpen] = useState(false);
// 🔸 Creamos las referencias
  const serviciosRef = useRef(null);
  const proyectosRef = useRef(null);
  const preguntasRef = useRef(null);
  const homeRef = useRef(null);
 

  //declared Utils
  const loading = useDelayedLoading(1500);
  const isMobile = useIsMobile();
 useDynamicCss('/styles/App2.css', 'app2-css');
    useN8nChat();


 
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


  if(loading) {
    return (
<div className="loading-bar">Loading</div>
   );
  }  
  return (
    <>

      <div className='App'> 
        <div className='content'> 
 <Header 
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      scrollToHome={scrollToHome}
      scrollToServicios={scrollToServicios}
      scrollToProyectos={scrollToProyectos}
      scrollToPreguntas={scrollToPreguntas}/>
      <ContentSection ref={homeRef}/>
      <Servicios ref={serviciosRef}/>
      <ProyectosRecientes ref={proyectosRef}/>
      <PreguntasFrecuentes ref={preguntasRef}/>
     <div id="n8n-chat" />
          <FloatingWhatsAppButton />

          <button onClick={toggleApp} className="changemodeButton">ModoScroll< /button>
        </div>

      </div>
  
     
    </>
  );
}
