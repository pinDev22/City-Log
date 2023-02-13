import React, { useState } from "react";
import Nav from './Components/Nav';
import SignupForm from "./Components/SignupForm";
import { Route, Routes } from "react-router-dom";
import City from "./Components/City";

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<SignupForm/>} />
      <Route path="/city" element={<City/>} />
    </Routes>
    </>

  );
}

export default App;
