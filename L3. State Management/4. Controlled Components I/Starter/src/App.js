import {useState} from 'react';
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const updateText = (event) => {
    setShownText(event.target.value);
  }

  const [shownText, setShownText] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <input type="text" placeholder="Say Something" value={shownText} onChange={updateText}/>
        <p className="echo">Echo:</p>
        <p>{shownText}</p>
      </div>
    </div>
  );
};

export default App;
