import { useState } from 'react';
import corgi from "./corgi.jpg";
import "./App.css";

const App = () => {
  const incrementLikesCount = () => {
    setLikes(likes + 1);
  }

  const [likes, setLikes] = useState(0)

  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi"></img>
      <p>Amount of likes: {likes}</p>
      <button onClick={incrementLikesCount}> Like</button>
    </div>
  );
};

export default App;
