import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPhoneNumber} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_rCDcFmtznd6YxInoDdVoHA3cvG_mNgk",

  authDomain: "growthinvestment-dac9e.firebaseapp.com",

  projectId: "growthinvestment-dac9e",

  storageBucket: "growthinvestment-dac9e.appspot.com",

  messagingSenderId: "853920348937",

  appId: "1:853920348937:web:79a2de2ef588a8455931d8"


};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getFirestore(app);
export { app, auth, provider, database };