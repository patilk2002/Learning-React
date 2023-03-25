import logo from './logo.svg';
import './App.css';
import './User.js';
import User from './User.js';
import Test from './Test.js';
import Withoutjsx from './Withoutjsx';
import Classcp from './Classcp';
function My(){
  return (<h2>outside</h2>)
}
function App() {
  
  let data="Kiran";

  // function Inside(){
  //   return (<h3>Inside</h3>)
  // }

  function apple(){
    data="Patil"
    alert(data);
  }


  return (
    <div className="App">

    <h2>Hello.....</h2>

    <h1>{data}</h1>

    <button onClick={apple}>click me</button>

    <button onClick={()=>apple()}>click me</button>



      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code><h1>Hello</h1>Hello</code> 
          <User/>
          <Test/>
          <My/>
          <Inside/>
          <Classcp/>
          <Withoutjsx/>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


    </div>
  );
}

export default App;
