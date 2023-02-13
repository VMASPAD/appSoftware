import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
const AnimatedTextTop = () => {
  const [text, setText] = useState("Texto inicial");
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const messages = ["solucion", "Confianza", "Seguridad"];

  useEffect(() => {
    const typeWriter = () => {
        if (index < messages.length) {
          setIsVisible(false);
          setTimeout(() => {
            setText(messages[index]);
            setIsVisible(true);
            setIndex(index + 1);
            if (index === messages.length - 2) return;
            setTimeout(typeWriter, 5000);
          }, 1000);
        }
      };
  

    setTimeout(() => {
      typeWriter();
    }, 1000);
  }, [index]);

  return (
<div>
<p className='textAnimationTop'>Software Gratuito y  </p>
    <p className={`fade-in-out ${isVisible ? "fade-in textAnimationTop" : "fade-out textAnimationTop"}`}>
      {text}</p>
</div>
  );
};

export default AnimatedTextTop;
