import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😞": "sad",
  "😢": "crying",
  "🤬": "angry",
  "🥰": "love",
  "😴": "sleeping",
  "🤔": "thinking",
  "👻": "Ghosty",
  "❤️": "Love",
  "😨": "Scary",
  "😛": "laugh",
  "🥶": "Cold",
  "😟": "Confused",
  "💀": "Skull"
};
var Emojis = Object.keys(emojiDictionary);
export default function App() {
  const [input, setinput] = useState(" ");
  function handler(event) {
    var userInput = event.target.value;
    var input = emojiDictionary[userInput];

    if (input === undefined) {
      input = "We don't have this emoji in our databse!";
    }
    setinput(input);
  }
  function emojiHandler(emoji) {
    var input = emojiDictionary[emoji];
    setinput(input);
  }
  return (
    <div className="App">
      <h1>Emoji Recognizer</h1>
      <input style={{ width: "50%", padding: "0.5rem" }} onChange={handler} />
      <div
        style={{ fontWeight: "bold", fontSize: "1.8rem", marginTop: "0.5rem" }}
      >
        {input}
      </div>
      <h2>Emojis we know</h2>
      <div className="emoji">
        {Emojis.map((emoji) => {
          return (
            <span onClick={() => emojiHandler(emoji)} key={emoji}>
              {" "}
              {emoji}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
//handle data from input element
