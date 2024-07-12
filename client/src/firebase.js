
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-mern-d8f3e.firebaseapp.com",
  projectId: "real-estate-mern-d8f3e",
  storageBucket: "real-estate-mern-d8f3e.appspot.com",
  messagingSenderId: "1020520108458",
  appId: "1:1020520108458:web:89d61ede4ac901aeb21bd3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
