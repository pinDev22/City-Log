import React, { useState } from "react";
import Nav from './Components/Nav';
import SignupForm from "./Components/SignupForm";

function App() {
  
  return (
    <>
    <Nav />
    <div className="container">
      <SignupForm />
    </div>
    </>

  );
}

export default App;
