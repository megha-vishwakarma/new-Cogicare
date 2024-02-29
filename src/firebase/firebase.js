import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBHFhL8T3hvNSOIIllcCvi9odN-TraH_84",
    authDomain: "cognicare-bea85.firebaseapp.com",
    databaseURL: "https://cognicare-bea85-default-rtdb.firebaseio.com",
    projectId: "cognicare-bea85",
    storageBucket: "cognicare-bea85.appspot.com",
    messagingSenderId: "1030024462906",
    appId: "1:1030024462906:web:e96577d86830bc25796b03",
    measurementId: "G-DRPVV2VFGF",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const analytics = getAnalytics(app);
