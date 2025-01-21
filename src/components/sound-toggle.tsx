"use client";

import { useStateStore } from "@/lib/state-store";
import { Volume2, VolumeOff } from "lucide-react";
import React from "react";

const SoundToggle = () => {
  const setSoundOn = useStateStore((state) => state.setSoundOn);
  const soundOn = useStateStore((state) => state.soundOn);

  return (
    <>
      {soundOn ? (
        <button
          title="Sound Off"
          className="p-2 rounded-full bg-primary"
          onClick={() => {
            setSoundOn(false);
          }}
        >
          <Volume2 className="size-4 text-primary-foreground" />
        </button>
      ) : (
        <button
          title="Sound On"
          className="p-2 rounded-full bg-primary"
          onClick={() => {
            setSoundOn(true);
          }}
        >
          <VolumeOff className="size-4 text-primary-foreground" />
        </button>
      )}
    </>
  );
};

export default SoundToggle;
