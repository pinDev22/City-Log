import React, { useState } from 'react';
import firebase, { auth, db } from '../firebase';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import{ addDoc } from "firebase/firestore";
import{ collection } from "firebase/firestore";


const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //authenticate new user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const user = res.user;

      //create new user in db
      await addDoc(collection(db,"Users"), {
        uid: user.uid,
        authProvider: "local",
        email,
      });
      
      setSuccess(true);
      console.log("Successful authentication & object build");
    } catch (err) {

      console.error(err);
      alert(err.message);

    }
      
  };

  return (
    <div style={{ backgroundColor: 'lightblue', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
    {success && <p style={{ color: 'green', marginTop: '20px' }}>Authentication Successful!</p>}
  <h1 style={{ marginTop: '30px' }}>City Log</h1>
  <form onSubmit={handleSubmit} style={{ marginTop: '30px', width: '50%' }}>
    <label>
      Email:
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginLeft: '10px', padding: '10px', borderRadius: '20px' }} />
    </label>
    <br />
    <label>
      Password:
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginLeft: '10px', padding: '10px', borderRadius: '20px' }} />
    </label>
    <br />
    {error && <p>{error.message}</p>}
    <button type="submit" style={{ marginTop: '20px', padding: '10px', borderRadius: '20px', backgroundColor: 'blue' , color: 'white'}}>Signup</button>
  </form>
</div>

  );
};

export default SignUpForm;
