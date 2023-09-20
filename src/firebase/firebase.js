// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, uploadBytes } from 'firebase/storage';
import { getDatabase } from "firebase/app";
// import { storage, ref, listAll, getDownloadURL,getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBMt2QkIXxvZG3jaVFO15N0rBxneh6t8tg",
  authDomain: "teatrify-a7ae6.firebaseapp.com",
  projectId: "teatrify-a7ae6",
  storageBucket: "teatrify-a7ae6.appspot.com",
  messagingSenderId: "1035024527910",
  appId: "1:1035024527910:web:15d6928f453b9b6c87ace7",
  measurementId: "G-0VS1XDX6XK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { app, analytics, storage }; // Exporta 'app' y 'analytics'
// export { storage, ref, uploadBytes }; // Exportamos las funciones necesarias para Storage
