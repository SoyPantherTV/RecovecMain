import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
  // Paste your firebase config here
  
    apiKey: "AIzaSyB8NEiOy0T3hzhuiw-hEEjRhWZUpfs67gU",
    authDomain: "recovec-a1c3e.firebaseapp.com",
    projectId: "recovec-a1c3e",
    storageBucket: "recovec-a1c3e.appspot.com",
    messagingSenderId: "515425405950",
    appId: "1:515425405950:web:6461c15fc433f5acf1ceaf"
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

//////////////////////////////////////////////////// por encima de aqui no mover nada



