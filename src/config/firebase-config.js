// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCHokqapt_qm0vDfld8OaEB2Y2xqqTGanA",
  authDomain: "dive-proposal.firebaseapp.com",
  projectId: "dive-proposal",
  storageBucket: "dive-proposal.appspot.com",
  messagingSenderId: "525347750972",
  appId: "1:525347750972:web:45b20becbc5050c5f26f39",
  measurementId: "G-ERB1JVDP4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db,auth};