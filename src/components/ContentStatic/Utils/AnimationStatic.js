// useContentSectionAnimation.js
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


export default function useAnimationStatic() {

 gsap.registerPlugin(useGSAP);

 
  useGSAP(() => {

     const text1 = new SplitText(".hero-static p", { type: "words, chars, lines" });

    const text2 = new SplitText(".hero-static h2", { type: "words, chars, lines" });
    
    const text3 = new SplitText(".profile-static", { type: "words, chars, lines" });
const tl = gsap.timeline();
   
    tl.from(text2.chars, {
        duration: 0.5,
        y: 20,
        stagger: 0.1,
        opacity: 0,
				filter: "blur(10px)",

     })
.from(".profile-image-static", {
	  	duration: 0.5,
			scale: .11,
	    opacity: 0,
    }, "<")


    .from(text1.words, {
        duration: 0.5,
        y: 10,
        stagger: 0.1,
        opacity: 0,
        filter: "blur(10px)",
     })

    

        .from(text3.words, {
        duration: 0.1,
        y: 20,
        stagger: 0.03,
        opacity: 0,
        filter: "blur(10px)",
    }, ">")
    .from(".grid-static", {
      x: 500,
      y: 500,
      opacity: 0,
      duration: 1,
      
    }, 2)
      .from(".skill-item", { 
        y: 500,
        opacity: 0,
        duration: 1,
        
      }, "<")
  }, []);

 }


