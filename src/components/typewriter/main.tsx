'use client'
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text = "", speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Marcar que estamos no cliente após a montagem
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        if (index === text.length) {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }
  }, [isClient, text, speed]);

  if (!isClient) {
    return null; // Não renderiza nada no servidor
  }

  return <div>{displayedText}</div>;
};

export default Typewriter;
