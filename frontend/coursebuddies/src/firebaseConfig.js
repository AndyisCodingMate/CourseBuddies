import firebase from 'firebase/compat/app';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {  
    apiKey: "AIzaSyBOEodUKiBpVXXl7STHNqx3Y8_rNtUmDcQ",
    authDomain: "coursebuddies-28099.firebaseapp.com",
    projectId: "coursebuddies-28099",
    storageBucket: "coursebuddies-28099.appspot.com",
    messagingSenderId: "1005785832412",
    appId: "1:1005785832412:web:b90b6d414220bf98520d19",
    measurementId: "G-0M9KD6YRDS"
};
// Initialize Fire
initializeApp(firebaseConfig);


export default firebase;