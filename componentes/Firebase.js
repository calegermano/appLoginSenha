import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQkcLgDPE3epRKeJIY90IHYxvxWTCInBU",
  authDomain: "apploginsenha-bde98.firebaseapp.com",
  projectId: "apploginsenha-bde98",
  storageBucket: "apploginsenha-bde98.firebasestorage.app",
  messagingSenderId: "702288838583",
  appId: "1:702288838583:web:94aa1102cd8f06abbd7232"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};