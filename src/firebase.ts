import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIzsHW4RZ_RXQrU6f5reGXv6uuRmddb8Y",
  authDomain: "discode-clone-8bfda.firebaseapp.com",
  projectId: "discode-clone-8bfda",
  storageBucket: "discode-clone-8bfda.appspot.com",
  messagingSenderId: "929347433745",
  appId: "1:929347433745:web:27ac53215d3f78888dc8b0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, db, provider };
