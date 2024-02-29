import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD_Ae7pgl9hUuz0E_Huk2U4K-3E14qDikM",
  authDomain: "fir-application-e60cd.firebaseapp.com",
  projectId: "fir-application-e60cd",
  storageBucket: "fir-application-e60cd.appspot.com",
  messagingSenderId: "561839972645",
  appId: "1:561839972645:web:05d6b4efa6d9486e667acc",
  measurementId: "G-0XCV83381N" 
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider };