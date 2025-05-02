import React, { useState, forwardRef, useEffect, useRef } from "react";
import "./PreguntasFrecuentes.css";
import ScrollReveal from "scrollreveal";

const preguntas = [
  {
    pregunta: "¿De dónde obtuviste tus conocimientos?",
    respuesta:
      "A través de formación autodidacta, cursos especializados y experiencia práctica.",
  },
  {
    pregunta: "¿Cuánto cobras por un proyecto?",
    respuesta:
      "Los precios varían según la complejidad y duración del proyecto. ¡Contáctame para una cotización!",
  },
  {
    pregunta: "¿Cómo puedo ayudarte a hacer crecer tu negocio?",
    respuesta:
      "Puedo ayudarte a destacar con diseños atractivos y funcionales que mejoran la experiencia del usuario, impulsan la interacción y fortalecen tu presencia digital.",
  },
];

const PreguntasFrecuentes = forwardRef((props, ref) => {
  const [activa, setActiva] = useState(null);
  const pregRef = useRef(null);
  const preguntasRef = useRef(null);

  useEffect(() => {
    const config = {
      origin: 'left',
      duration: 1200,
      delay: 150,
      distance: '-300px',
      scale: 1,
      easing: 'ease',
      reset: true,
    };

    ScrollReveal().reveal(pregRef.current, config);
  }, []);

  useEffect(() => {
    const config = {
      origin: 'right',
      duration: 1500,
      delay: 150,
      distance: '-300px',
      scale: 1,
      easing: 'ease',
      reset: true,
    };

    ScrollReveal().reveal(preguntasRef.current, config);
  })
  const togglePregunta = (index) => {
    setActiva(activa === index ? null : index);
  };

  return (
    <div ref={ref} className="faq-container">
      <div className="faq-left" ref={pregRef}>
        <h2>
          Preguntas <br /> frecuentes
        </h2>
        <div className="faq-image">IMAGE</div>
      </div>

      <div className="faq-right" ref={preguntasRef}>
        {preguntas.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-pregunta" onClick={() => togglePregunta(index)}>
              <span>{item.pregunta}</span>
              <span className="icono">{activa === index ? "−" : "+"}</span>
            </div>
            {activa === index && (
              <div className="faq-respuesta">{item.respuesta}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default PreguntasFrecuentes;

