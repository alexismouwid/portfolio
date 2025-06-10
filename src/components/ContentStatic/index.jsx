import React, { forwardRef, useRef , useEffect} from 'react';
import './ContentStatic.css';
import { useVisibilityObserver } from '../../utils/useVisibilityObserver';
import useAnimationStatic from './Utils/AnimationStatic';
import HeroStatic from './Home/HeroStatic';
import ProfileStatic from './Home/ProfileStatic';
import SkillStatic from './Home/SkillStatic';
import ServiceStatic from './ServiceStatic';
import ProyectoStatic from './ProyectoStatic';

const ContentStatic = forwardRef((props, ref) => {
 useAnimationStatic();

  useVisibilityObserver(".ejeY");
  useVisibilityObserver(".ejeL");
  useVisibilityObserver(".ejeX");
  return (
    <>
      <div className="static-principal">
 <div className="static-content" ref={ref}>
        <HeroStatic />
        <ProfileStatic />
        <SkillStatic />
             </div>
      </div>

        <ServiceStatic />
        <ProyectoStatic />
              </>
  );
});

export default ContentStatic;
