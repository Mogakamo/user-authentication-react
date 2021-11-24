import './App.css';
import React, {useState} from 'react';

function App() {

  const username = "Mogaka"
  const password = "password"

  const [usernameState, setUsernameState] = useState("")
  const [passwordState, setPasswordState] = useState("")
  const [logIn, setlogIn] = useState(false)

  const login = () => {
    if (usernameState === username && passwordState === password) {
      setlogIn(true)
    }
  }

  return (
    <div className="App">
      <div class="right">
        <img src="https://source.unsplash.com/3MAmj1ZKSZA/1600x900" />
      </div>
      <div class="left">
        <form>
        <h1>Login</h1>
        <label for="username"> Username</label>
        <input type="text" onChange={(event) => {
          setUsernameState(event.target.value)
        }} required />
        <label for="password"> Password</label>
        <input type="password" onChange={(event) => {
          setPasswordState(event.target.value)
        }} required />
        <input type="submit" onClick={login} value="Login" />

        <p>Don't have an account? <a href="#">Register</a></p>
        </form>     
      </div>
    </div>
  );
}

export default App;
