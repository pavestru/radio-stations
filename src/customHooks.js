import { useState, useEffect } from "react";

export function useAudioPlayer(audioRef, initialPlaying) {
  const [state, setState] = useState({
    playing: initialPlaying ?? true
  });

  useEffect(() => {
    if (state.playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [state, audioRef]);

  const togglePlaying = () => {
    setState(prevState => ({ ...prevState, playing: !prevState.playing }));
  };

  return [state, togglePlaying];
}
