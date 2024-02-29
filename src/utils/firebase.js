import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDUdrU215AZh4O0SQIfmuUpSiBMVIHfVSg",
  authDomain: "study-smart-10f58.firebaseapp.com",
  databaseURL: "https://study-smart-10f58-default-rtdb.firebaseio.com",
  projectId: "study-smart-10f58",
  storageBucket: "study-smart-10f58.appspot.com",
  messagingSenderId: "797804986300",
  appId: "1:797804986300:web:700b5569492da2885cf5b9",
  measurementId: "G-YX4WWV143H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
