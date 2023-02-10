import React, { useState } from "react";
import SignupForm from "./Components/SignupForm"
import { auth, db } from './firebase';
import {  onAuthStateChanged  } from 'firebase/auth';
import{ addDoc } from "firebase/firestore";
import{ collection } from "firebase/firestore";
import Kekambas from './Components/Kekambas';
import Nav from './Components/Nav';
import Log from './Components/Log';

function App() {
  const [user, setUser] = useState(null);


    //listen for auth state change
    onAuthStateChanged(auth, currentUser => {
      
      //once auth state changes, add user doc
      if (currentUser) {

        const email = currentUser.email
  
         //after adding user doc, set user state in signup component
        addDoc(collection(db,"Users"), {
          uid: currentUser.uid,
          authProvider: "local",
          email,
        });

        console.log("just created user object")

        setUser(currentUser);
      } else {
        console.log("NO user object")
        setUser(null);
      }
    });

  return (
    <>
    <Nav />
    <div className="container">
        <Log />
        <Kekambas />
    </div>
    </>

  );
}

export default App;
