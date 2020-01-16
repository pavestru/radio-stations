import React, { useRef, useState, useEffect } from "react";
import "./Player.css";
import { Play, Stop, Close } from "./icons";

export function Player(props) {
  const audioRef = useRef();
  const [state, setState] = useState({
    playing: props.initialPlaying ?? true
  });
  useEffect(() => {
    if (state.playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [state]);

  const togglePlaying = () => {
    setState(prevState => ({ ...prevState, playing: !prevState.playing }));
  };
  return (
    <div className="Player">
      <audio ref={audioRef} src={props.stream.streamUrl} />
      <div
        className={
          "Player__button Player__flex-fixed" +
          (state.playing ? " Player__button--playing" : "")
        }
        onClick={togglePlaying}
      >
        {state.playing ? (
          <Stop className="Player__icon" />
        ) : (
          <Play className="Player__icon" />
        )}
      </div>
      <div className="Player__stream-name">{props.stream.name}</div>
      <div>
        <span onClick={props.onClose} className="Player__close-button">
          <Close className="Player__icon" />
        </span>
      </div>
    </div>
  );
}
