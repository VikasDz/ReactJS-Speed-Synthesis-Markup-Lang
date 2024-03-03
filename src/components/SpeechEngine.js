import { useEffect, useState } from 'react';

const SpeechEngine = (text, playing) => {
  const [utterance, setUtterance] = useState(null);

  useEffect(() => {
    const speechSynthesis = window.speechSynthesis;

    // Create a new SpeechSynthesisUtterance when text changes
    const newUtterance = new SpeechSynthesisUtterance(text);
    setUtterance(newUtterance);

    // Speak the utterance if playing, otherwise cancel the speech
    if (playing) {
      speechSynthesis.speak(newUtterance);
    } else {
      speechSynthesis.cancel();
    }

    // Cleanup function to cancel speech when the component unmounts or when text/playing changes
    // return () => {
    //   speechSynthesis.cancel();
    // };
  }, [text, playing]);

  // Return the utterance for external use if needed
  return utterance;
};

export default SpeechEngine;
