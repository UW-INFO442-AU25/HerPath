// Firebase configuration
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// Can be overridden with environment variables for different environments
const firebaseConfig = {
  apiKey:
    import.meta.env.VITE_FIREBASE_API_KEY ||
    "AIzaSyAkJcKWWCq6BX-p71px_VSO3kyE3zNnBjA",
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ||
    "herpath-8d991.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "herpath-8d991",
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ||
    "herpath-8d991.firebasestorage.app",
  messagingSenderId:
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "239602036380",
  appId:
    import.meta.env.VITE_FIREBASE_APP_ID ||
    "1:239602036380:web:30b24aeb773cf5bb004759",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
