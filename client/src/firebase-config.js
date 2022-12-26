import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyB_OsvESowxClXiKWF2ZaZpVeP-9zgRRXo",
    authDomain: "multimarket-c7734.firebaseapp.com",
    projectId: "multimarket-c7734",
    storageBucket: "multimarket-c7734.appspot.com",
    messagingSenderId: "423185431494",
    appId: "1:423185431494:web:04b8e1e3140757765ad0c7"
  };

  const app = initializeApp(firebaseConfig);
  export const authentication = getAuth(app)