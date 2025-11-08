'use client';

import { useEffect, useState } from 'react';

const SpeechSynthesis = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  useEffect(() => {
    // Check if speech synthesis is available
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      // Stop any current speech
      window.speechSynthesis.cancel();
      
      if (text) {
        // Create a new speech utterance
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Configure voice settings
        utterance.rate = 0.9; // Slightly slower than default
        utterance.pitch = 1.0;
        utterance.volume = 0.8;
        
        // Try to use a professional-sounding voice if available
        const voices = window.speechSynthesis.getVoices();
        const preferredVoices = voices.filter(voice => 
          voice.name.includes('Daniel') || 
          voice.name.includes('Samantha') || 
          voice.name.includes('Karen') ||
          voice.name.includes('Google') ||
          voice.name.includes('Premium')
        );
        
        if (preferredVoices.length > 0) {
          utterance.voice = preferredVoices[0];
        }
        
        // Add event listeners
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        
        // Start speaking
        window.speechSynthesis.speak(utterance);
      }
    }
    
    // Cleanup function to stop speech when component unmounts
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [text]);
  
  return (
    <div className="sr-only" aria-live="assertive">
      {isSpeaking && <span>Speaking: {text}</span>}
    </div>
  );
};

export default SpeechSynthesis;