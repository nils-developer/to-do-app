import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAiJgghPsRmLC5nkK325QOt29IeAUO3Gow",
    authDomain: "to-do-app-15ae4.firebaseapp.com",
    projectId: "to-do-app-15ae4",
    storageBucket: "to-do-app-15ae4.appspot.com",
    messagingSenderId: "642940975798",
    appId: "1:642940975798:web:4bd3f6328540638917c417"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db }