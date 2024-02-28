// useSpeechEngine.js
import { useEffect, useRef } from 'react';

const SpeechEngine = (text, playing) => {
  const speechSynthesisRef = useRef(null);

  useEffect(() => {
    const speechSynthesis = window.speechSynthesis;

    if (!speechSynthesis) {
      console.error('Speech Synthesis API not supported');
      return;
    }

    speechSynthesisRef.current = new SpeechSynthesisUtterance(text);

    if (playing) {
      speechSynthesis.speak(speechSynthesisRef.current);
    } else {
      speechSynthesis.cancel();
    }

    return () => {
      speechSynthesis.cancel();
    };
  }, [text, playing]);

  return speechSynthesisRef;
};

export default SpeechEngine;
