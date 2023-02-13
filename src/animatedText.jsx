import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
  const [text, setText] = useState("Texto inicial");
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const messages = ["Confort", "Facilidad", "Escabilidad"];

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
<p className='textAnimation'>Nosotros te ofrecemos: </p>
    <p className={`fade-in-out ${isVisible ? "fade-in textAnimation" : "fade-out textAnimation"}`}>
      {text}
    </p>
</div>
  );
};

export default AnimatedText;
