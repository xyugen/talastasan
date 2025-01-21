"use client";

import { useStateStore } from "@/lib/state-store";
import { useEffect } from "react";

const ClickSound = () => {
  const soundOn = useStateStore((state) => state.soundOn);

  useEffect(() => {
    if (!soundOn) return;

    const clickSound = new Audio("/audios/click.mp3");

    const handleClick = () => {
      // Play the audio
      clickSound.currentTime = 0; // Reset to start in case it is played multiple times
      clickSound.volume = 0.3;
      clickSound.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    };

    // Add the event listener
    window.addEventListener("click", handleClick);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [soundOn]);

  return <></>; // This component does not render anything
};

export default ClickSound;