import React, { useEffect, useState, forwardRef  } from "react";
import './ContentSection.css';
import useContentSectionAnimation from "./Utils/ContentAnimation.js";
import  { useIsMobile  } from "../../utils/useIsMobile";
import HeroSection from "./Home/Hero-Section";
import ProfileSection from "./Home/Profile-Section";
import SkillsSection from "./Home/Skills-Section";
import Servicios from "./Services/Services-Section";
import Proyectos from "./Proyectos/ProyectoSection";

const ContentSection = forwardRef((props, ref, ref2) => {

 const [isMobile, setIsMobile] = useState(false);
  
   useIsMobile();
   useContentSectionAnimation();
  return (
    <>
      <div className="content-principal">
 <div className="content-container" ref={ref}>
       <HeroSection />
       <ProfileSection />
       <SkillsSection />
       <Servicios />
       <Proyectos />
         
 	<footer>
  <button id="play">reproducir</button>
  <button id="pause">pausar</button>
  <button id="resume">resumir</button>
  <button id="reverse">revertir</button>
  <button id="restart">reiniciar</button>
	<button id="turbo">turbo</button>
</footer>




   
      </div>
      </div>
              </>
  );
});

export default ContentSection;
