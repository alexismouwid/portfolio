import React from 'react';
import { useState,  useEffect, useRef } from 'react';
import { useIsMobile } from './utils/useIsMobile';
import { useN8nChat } from './utils/useN8nChat';
import { useDynamicCss } from './utils/useDynamicCss';
import { useDelayedLoading } from './utils/useDelayedLoading';
import Header from './components/Header';
import Content from './components/Content';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import Play from './components/Play';
import Pause from './components/Pause';
import '@n8n/chat/style.css';


export default function App( {toggleApp} ) {


   const [menuOpen, setMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [modeStatic, setmodeStatic] = useState(false);

   //declared Utils
  const loading = useDelayedLoading(1500);
  const isMobile = useIsMobile();
    useDynamicCss('/styles/App.css', 'app-css');
    useN8nChat();





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
 <Content />
          <div id="n8n-chat" />
  <button onClick={toggleApp} className="changemodeButton">ModeStatic</button>
          <FloatingWhatsAppButton />
          <Pause /> 
          <Play />
        </div>
      </div>

    </>
  );
}
