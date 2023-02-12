import React, { useState } from "react";
import Nav from './Components/Nav';
import SignupForm from "./Components/SignupForm";
import { Route, Routes } from "react-router-dom";
import Neighborhood from "./Components/Neighborhood";

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<SignupForm/>} />
      <Route path="/Neighborhood" element={<Neighborhood/>} />
    </Routes>
    </>

  );
}

export default App;
