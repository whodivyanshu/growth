
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCci93oq6lG8DeHOo0fCoTiJ-MZyYyGkDI",
  authDomain: "growthinvestment-ec70e.firebaseapp.com",
  projectId: "growthinvestment-ec70e",
  storageBucket: "growthinvestment-ec70e.appspot.com",
  messagingSenderId: "291454685935",
  appId: "1:291454685935:web:3cd3df6db5bd75abcfc11a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getFirestore(app);
export { app, auth, provider, database };