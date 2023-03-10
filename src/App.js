import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [display, setDisplay] = useState("")
  const [volume, setVolume] = useState(1)
  const [active, setActive] = useState(null)
 
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      playDrum(event.key.toUpperCase())
    })
  }, )

  const audioKeys = [{
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
}, {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
}, {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
}, {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
}, {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
}, {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
}, {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
}, {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
}, {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
}]

function playDrum(id) {
  const audio = document.getElementById(id)
  if (audio.paused) {
    audio.volume = volume;
    audio.play();
  }
  const clickedAudio = audioKeys.find(audio => audio.keyTrigger === id)
  setDisplay(clickedAudio.id)
  setActive(clickedAudio.id)
  setTimeout(() => setActive(false), 300)
}

  return (
    <div className="App">
      <div id="drum-machine">
        <h1>Drum Machine</h1>
        <div id="display">{display}</div>
        <div className="drum-pads">
          {audioKeys.map(audio => (
            <div key={audio.id} className={`drum-pad ${audio.id === active && "btn-active"}`} id={audio.id} onClick={() => playDrum(audio.keyTrigger)}>
              {audio.keyTrigger}
              <audio src={audio.url} className="clip" id={audio.keyTrigger}></audio>
            </div>
          ))}
        </div>
        <div className="volume-container">
          <label htmlFor="volume" className="volume-label">Volume</label>
          <input 
          type="range" 
          name="volume"
          id="volume"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(event) => setVolume(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;