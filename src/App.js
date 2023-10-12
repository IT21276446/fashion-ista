import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Route, Routes} from 'react-router-dom';
import Home from './screens/home';

function App(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
  
}

export default App;