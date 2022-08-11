import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMf6z-UWhg769euD8NCY1266AU0b-zBBk",
  authDomain: "dashboard-tutorial-bb068.firebaseapp.com",
  projectId: "dashboard-tutorial-bb068",
  storageBucket: "dashboard-tutorial-bb068.appspot.com",
  messagingSenderId: "361584957260",
  appId: "1:361584957260:web:e5b1a093f143b66781e1e9",
  measurementId: "G-D3V4H3TEMT",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
