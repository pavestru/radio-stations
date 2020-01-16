import React, { useRef } from "react";
import "./Player.css";
import { Play, Stop, Close } from "./icons";
import { useAudioPlayer } from "./customHooks";

export function Player(props) {
  const audioRef = useRef();

  const [state, togglePlaying] = useAudioPlayer(audioRef, props.initialPlaying);

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
