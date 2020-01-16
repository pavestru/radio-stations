import React from "react";
import "./Player.css";
import { Play, Stop, Close } from "./icons";

export class Player extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.state = {
      playing: props.initialPlaying ?? true
    };
  }

  componentDidMount() {
    if (this.state.playing) {
      this.audioRef.current.play();
    } else {
      this.audioRef.current.pause();
    }
  }

  componentDidUpdate() {
    if (this.state.playing) {
      this.audioRef.current.play();
    } else {
      this.audioRef.current.pause();
    }
  }

  togglePlaying = () => {
    this.setState(prevState => ({
      ...prevState,
      playing: !prevState.playing
    }));
  };

  render() {
    return (
      <div className="Player">
        <audio ref={this.audioRef} src={this.props.stream.streamUrl} />
        <div
          className={
            "Player__button Player__flex-fixed" +
            (this.state.playing ? " Player__button--playing" : "")
          }
          onClick={this.togglePlaying}
        >
          {this.state.playing ? (
            <Stop className="Player__icon" />
          ) : (
            <Play className="Player__icon" />
          )}
        </div>
        <div className="Player__stream-name">{this.props.stream.name}</div>
        <div>
          <span onClick={this.props.onClose} className="Player__close-button">
            <Close className="Player__icon" />
          </span>
        </div>
      </div>
    );
  }
}
