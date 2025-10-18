// firebase.js ou firebaseConfig.js

import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQkcLgDPE3epRKeJIY90IHYxvxWTCInBU",
  authDomain: "apploginsenha-bde98.firebaseapp.com",
  projectId: "apploginsenha-bde98",
  storageBucket: "apploginsenha-bde98.firebasestorage.app",
  messagingSenderId: "702288838583",
  appId: "1:702288838583:web:94aa1102cd8f06abbd7232",
};

// Inicializa o app
const app = initializeApp(firebaseConfig);

// Inicializa Auth com persistência
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Inicializa o Firestore
const db = getFirestore(app);

export { auth, db };
