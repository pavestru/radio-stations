import React from "react";
import { Player } from "./Player";
import radios from "./stations";

import "./App.css";

class App extends React.Component {
  state = { index: -1 };

  setRadio = index => {
    this.setState({ index });
  };

  render() {
    const selected = this.state.index;

    return (
      <div className="App">
        <h1>Radio Stations</h1>
        {radios.map((radio, index) => (
          <div
            className="App__radio"
            key={index}
            onClick={() => this.setRadio(index)}
          >
            <div className="App__radio-logo">
              <img src={radio.logo} alt={radio.name} />
            </div>
            <div className="App__radio-name">{radio.name}</div>
          </div>
        ))}
        {selected >= 0 && (
          <Player
            stream={radios[selected]}
            initialPlaying={true}
            onClose={() => this.setRadio(-1)}
          />
        )}
      </div>
    );
  }
}

export default App;
