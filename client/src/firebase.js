import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFvnX8bP6XXXxuI2FnrEsOSoMvc76jpBY",
  authDomain: "dormly-bce21.firebaseapp.com",
  projectId: "dormly-bce21",
  storageBucket: "dormly-bce21.firebasestorage.app",
  messagingSenderId: "1090566065941",
  appId: "1:1090566065941:web:8519652d36f871beb4231c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;