import logo from './logo.svg';
import './App.css';
import './User.js';
import User from './User.js';
import Test from './Test.js'
function My(){
  return (<h2>outside</h2>)
}
function App() {

  function Inside(){
    return (<h3>Inside</h3>)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code><h1>Hello</h1>Hello</code> 
          <User/>
          <Test/>
          <My/>
          <Inside/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
