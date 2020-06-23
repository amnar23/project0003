import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div>
      <p> Hello <strong>{props.name}</strong></p> 
      <span>Let's Start learning</span>
    </div>
  );
}

export default App;
