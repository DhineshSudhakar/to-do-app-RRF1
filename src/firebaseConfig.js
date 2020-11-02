import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBkjUhmsaYnWt5a0u4xGmwNU0GjiirNiR8",
    authDomain: "react-redux-firebase-tod-2e30e.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-tod-2e30e.firebaseio.com",
    projectId: "react-redux-firebase-tod-2e30e",
    storageBucket: "react-redux-firebase-tod-2e30e.appspot.com",
    messagingSenderId: "527575285005",
    appId: "1:527575285005:web:251bd9ddd8212d54328444",
    measurementId: "G-98QLCZ28B6"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase;