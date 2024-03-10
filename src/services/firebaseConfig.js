// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD78lRsp4to2pXGx_Iy-CT9afVmp15DcsA",
    authDomain: "portfolio2024-395ed.firebaseapp.com",
    projectId: "portfolio2024-395ed",
    storageBucket: "portfolio2024-395ed.appspot.com",
    messagingSenderId: "917114640461",
    appId: "1:917114640461:web:36c76446af620ed94e6404"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);