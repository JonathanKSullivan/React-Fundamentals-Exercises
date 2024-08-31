import { useState } from "react";
import logo from "./logo.svg";
import RegistrationForm from "./components/RegistrationForm";
import UserList from "./components/UserList";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState({});
  const [showGames, setShowGames] = useState(true);
  const [username, setUserName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [error, setError] = useState(""); // New state for error messages

  const RegisterUser = (event) => {
    event.preventDefault();
    const usernameLower = username.toLowerCase();
    if (users[usernameLower] === undefined) {
      setUsers({
        ...users,
        [usernameLower]: {
          firstname: firstname,
          lastname: lastname,
          games: 0,
        }
      });
      setUserName("");
      setFirstName("");
      setLastName("");
      setError(""); // Clear any existing errors
    } else {
      setError("Username already exists. Please choose a different username.");
    }
  };

  const updateUsername = (event) => setUserName(event.target.value);
  const updateFirstname = (event) => setFirstName(event.target.value);
  const updateLastname = (event) => setLastName(event.target.value);
  const toggleShowGames = () => setShowGames(!showGames);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Video Game</h1>
      </header>
      <RegistrationForm 
        RegisterUser={RegisterUser} 
        username={username} 
        firstname={firstname} 
        lastname={lastname} 
        updateUsername={updateUsername} 
        updateFirstname={updateFirstname} 
        updateLastname={updateLastname} 
        error={error} // Pass error down
      />
      <UserList 
        users={users} 
        showGames={showGames} 
        toggleShowGames={toggleShowGames} 
      />
    </div>
  );
};

export default App;
