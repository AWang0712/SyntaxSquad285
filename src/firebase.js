import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "",
    authDomain: "challenge-f79e3.firebaseapp.com",
    projectId: "challenge-f79e3",
    storageBucket: "challenge-f79e3.appspot.com",
    messagingSenderId: "99494841515",
    appId: "1:99494841515:web:bf39d943cbef23502e7bee",
    measurementId: "G-YFDEQ9JX1L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

