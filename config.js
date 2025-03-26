import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBhiNLus0SNZSBZ99vz9WsR4YhxGFWdk2Q",
    authDomain: "myquizapp-7dc14.firebaseapp.com",
    projectId: "myquizapp-7dc14",
    storageBucket: "myquizapp-7dc14.firebasestorage.app",
    messagingSenderId: "331073371920",
    appId: "1:331073371920:web:df3831fb7b8a8c5250ef95",
    measurementId: "G-EM2T5YH5PK"
  };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

export { firebase };
  
     