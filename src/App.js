import React from 'react';
import FormValidation from './component1/FormValidation';
import Otp from './component1/Otp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>

      
      <Routes>
        <Route path='/' element={<FormValidation/>}/>
        <Route path='/otp' element={<Otp />}/>
      </Routes>
 
    </BrowserRouter>
  );
}

export default App;
