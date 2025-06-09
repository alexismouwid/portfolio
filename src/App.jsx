import React from 'react';
import { useState,  useEffect, useRef } from 'react';
import  { useIsMobile  } from "./utils/useIsMobile";
import './App.css';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import Header from './components/Header';
import Content from './components/Content';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import Play from './components/Play';
import Pause from './components/Pause';
export default function App() {


   const [loading, setLoading] = useState(true);
   const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

// 🔸 Creamos las referencias
  const homeRef = useRef(null);
  const profileRef = useRef(null);
  const skillsRef = useRef(null);
  const serviciosRef = useRef(null);
  const proyectosRef = useRef(null);
  const preguntasRef = useRef(null);

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
     />

      <Content
         />
          <div id="n8n-chat" />
          <FloatingWhatsAppButton />
         <Pause /> 
          <Play />
        </div>

      </div>
  
     
    </>
  );
}
