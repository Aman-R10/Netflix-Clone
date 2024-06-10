// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyXq5IRofd0pk2Yn-5Lq_9Hhf6rY_xCCE",
  authDomain: "reacty-netflixy-yt-165a0.firebaseapp.com",
  projectId: "reacty-netflixy-yt-165a0",
  storageBucket: "reacty-netflixy-yt-165a0.appspot.com",
  messagingSenderId: "540195103997",
  appId: "1:540195103997:web:6035b34b44295253654a94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
