// Importation directe depuis les serveurs de Google (Version Module)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDocs, getDoc, query, orderBy, limit, where } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Ta configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCD2unH1FSHeA4ubrAilXqkdghDNYyZZe4",
  authDomain: "band-a-training.firebaseapp.com",
  projectId: "band-a-training",
  storageBucket: "band-a-training.firebasestorage.app",
  messagingSenderId: "19365504791",
  appId: "1:19365504791:web:f580f68dfec4c25ccd7952",
  measurementId: "G-3WSZ5G4G8B"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// On "expose" ces outils à l'ordinateur pour que ton script.js puisse s'en servir
window.db = db;
window.auth = auth;
window.firebaseModules = {
    collection, doc, setDoc, getDocs, getDoc, query, orderBy, limit, where, // Ajout de where
    signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile // Ajout de updateProfile
};

console.log("🔥 Firebase est connecté et prêt !");