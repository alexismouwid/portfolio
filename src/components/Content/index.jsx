import React, { useEffect, useState } from "react";
import useContentSectionAnimation from "./Utils/ContentAnimation.js";
import { useIsMobile } from "../../utils/useIsMobile";
import HeroSection from "./Home/Hero-Section";
import ProfileSection from "./Home/Profile-Section";
import SkillsSection from "./Home/Skills-Section";
import Servicios from "./Services/Services-Section";
import Proyectos from "./Proyectos/ProyectoSection";
import Preguntas from "./Preguntas"


const ContentSection = ()  => {
  const [isMobile, setIsMobile] = useState(false);
  
  useIsMobile();
  useContentSectionAnimation();

  return (
    <div className="content-principal">
      <div className="content-container" >
        <HeroSection  />
        <ProfileSection />
        <SkillsSection />
        <Servicios  />
        <Proyectos  />
        <Preguntas  />
                
        
        
             </div>
    </div>
  );
};

export default ContentSection;
