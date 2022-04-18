import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDTOQKDrBUmM4Mw2CxMBuFep04Yl-ud94I",
    authDomain: "doctor-portfolio-ef3bc.firebaseapp.com",
    projectId: "doctor-portfolio-ef3bc",
    storageBucket: "doctor-portfolio-ef3bc.appspot.com",
    messagingSenderId: "451256249728",
    appId: "1:451256249728:web:20b2fb2c70e9dd3c37e565"
  };

  const app = initializeApp(firebaseConfig);
  const auth =getAuth(app);
  export default auth;