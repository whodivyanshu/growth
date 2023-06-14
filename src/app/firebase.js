
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDIalD3hefDlWgEt6o42NOB48LwTDR2lr0",
  authDomain: "growthinvestment-62836.firebaseapp.com",
  projectId: "growthinvestment-62836",
  storageBucket: "growthinvestment-62836.appspot.com",
  messagingSenderId: "399945425456",
  appId: "1:399945425456:web:6667df0388c7fed44683f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
const provider = new GoogleAuthProvider();
export { app, auth, provider };