import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAiJgghPsRmLC5nkK325QOt29IeAUO3Gow",
    authDomain: "to-do-app-15ae4.firebaseapp.com",
    projectId: "to-do-app-15ae4",
    storageBucket: "to-do-app-15ae4.appspot.com",
    messagingSenderId: "642940975798",
    appId: "1:642940975798:web:4bd3f6328540638917c417"
};

const app = firebase.initializeApp(firebaseConfig);
const firestore = app.firestore();

export { app, firestore }