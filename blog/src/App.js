import { useState } from 'react';
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
  
  const [sdata,setsdata]=useState("kIRAN");
  let data="Kiran";

  function update(){
    setsdata("PATIL");
  }
  function Inside(){
    return (<h3>Inside</h3>)
  }

  function apple(){
    data="Patil"
    alert(data);
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
          <Classcp/>
          <Withoutjsx/>
          
          <h2>Hello.....</h2>

          <h1>{data}</h1>
          
          <h2>{sdata}</h2>

          <button onClick={apple}>click me</button>

          <button onClick={()=>apple()}>click me</button>

          <button onClick={()=>update()}>state</button>


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