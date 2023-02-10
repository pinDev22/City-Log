import React, { useState } from 'react';
import firebase, { auth, db } from '../firebase';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import{ addDoc } from "firebase/firestore";
import{ collection } from "firebase/firestore";


const SignUpForm = ({setUser}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //authenticate new user
      const res = await createUserWithEmailAndPassword(auth, email, password);
      
      console.log("Successful authentication");
    } catch (err) {

      console.error(err);
      alert(err.message);

    }
      
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      {error && <p>{error.message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;
