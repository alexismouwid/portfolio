import React from 'react';
import { useState,  useEffect, useRef } from 'react';
import './App.css';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import Header from './components/Header';
import ContentSection from './components/ContentSection';
import Servicios from './components/Servicios';
import ProyectosRecientes from './components/ProyectosRecientes';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

export default function App() {


   const [loading, setLoading] = useState(true);
   const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
// 🔸 Creamos las referencias
  const serviciosRef = useRef(null);
  const proyectosRef = useRef(null);
  const preguntasRef = useRef(null);
  const HomeRef = useRef(null);

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

      <ContentSection ref={HomeRef}/>
      <Servicios ref={serviciosRef}/>
      <ProyectosRecientes ref={proyectosRef}/>
      <PreguntasFrecuentes ref={preguntasRef}/>
     <div id="n8n-chat" />
          <FloatingWhatsAppButton />
        </div>

      </div>
  
     
    </>
  );
}
