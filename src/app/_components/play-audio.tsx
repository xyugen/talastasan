"use client";

import { useEffect } from "react";

const PlayAudio = () => {
  useEffect(() => {
    const audio = new Audio("/audios/transition.mp3"); // Path relative to the public folder
    audio.volume = 0.25;
    audio.play();
  }, []);

  return <></>;
};

export default PlayAudio;
