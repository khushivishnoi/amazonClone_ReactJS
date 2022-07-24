import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDrfa_O-ZHq_83FLLNc916TGHHiyzS-oBo",
    authDomain: "clone-89c82.firebaseapp.com",
    projectId: "clone-89c82",
    storageBucket: "clone-89c82.appspot.com",
    messagingSenderId: "853422092225",
    appId: "1:853422092225:web:c1d23a8b3233a14001c940",
    measurementId: "G-5KQJ76LFS1"
  };
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };