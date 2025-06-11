import React from 'react';
import { useState,  useEffect, useRef } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import Header from './componentstatic/Header';
import ContentSection from './componentstatic/ContentSection';
import Servicios from './componentstatic/Servicios';
import ProyectosRecientes from './componentstatic/ProyectosRecientes';
import PreguntasFrecuentes from './componentstatic/PreguntasFrecuentes';
import FloatingWhatsAppButton from './componentstatic/FloatingWhatsAppButton';

export default function App2( {toggleApp} ) {


   const [loading, setLoading] = useState(true);
   const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
// 🔸 Creamos las referencias
  const serviciosRef = useRef(null);
  const proyectosRef = useRef(null);
  const preguntasRef = useRef(null);
  const homeRef = useRef(null);

useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/App2.css';
    link.id = 'app2-css';
    document.head.appendChild(link);

    return () => {
      const existingLink = document.getElementById('app2-css');
      if (existingLink) existingLink.remove();
    };
  }, []);

useEffect(() => {
		createChat({
		webhookUrl: 'https://n8n-i83n.onrender.com/webhook/e8d05464-738b-466c-93cf-47c1456ec0fe/chat',
	webhookConfig: {
		method: 'POST',
		headers: {}
	},
	target: '#n8n-chat',
	mode: 'window',
	chatInputKey: 'chatInput',
	chatSessionKey: 'sessionId',
	metadata: {},
	showWelcomeScreen: false,
	defaultLanguage: 'en',
	initialMessages: [
		 'Haz una pregunta?'
	],
	i18n: {
		en: {
			title: 'Hey! 👋',
			subtitle: "Aqui puedes hacerme cualquier pregunta",
			footer: '',
			getStarted: 'New Conversation',
			inputPlaceholder: 'Type your question..',
		},
	},		});
	}, []);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  })

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
    }, 1500);
  }, []);

  

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
