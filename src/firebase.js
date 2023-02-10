// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIDKtVuaQwqdBhYWrLnTg0eS1B-8XOWP4",
  authDomain: "citylog-8f680.firebaseapp.com",
  projectId: "citylog-8f680",
  storageBucket: "citylog-8f680.appspot.com",
  messagingSenderId: "775639232925",
  appId: "1:775639232925:web:bcba9b664a76045e99bf74",
  measurementId: "G-3TNQKJ59NQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);