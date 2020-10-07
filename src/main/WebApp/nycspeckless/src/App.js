import React from 'react';


// import logo from './logo.svg';
import NavComponent from './components/navComponent'
import {HashRouter} from 'react-router-dom';
import './App.css';

function App() {
  
  return (
    <HashRouter basename='/'>
      <NavComponent >


      </NavComponent>

    </HashRouter>
   
  );
}

export default App;
