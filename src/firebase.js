// Import the necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword
} from "firebase/auth";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAnrovTMxJXr8hiz6gdYAVFSJw4Z6JoMhQ",
  authDomain: "food-management-system-2537c.firebaseapp.com",
  projectId: "food-management-system-2537c",
  storageBucket: "food-management-system-2537c.appspot.com",
  messagingSenderId: "16495431480",
  appId: "1:16495431480:web:f09015a6c5d7d11af53bcd",
  measurementId: "G-1146GQ6DYC"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Initialize Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Export what you need
export {
  app,
  auth,
  provider,
  analytics,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword
};
