import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyATywZdmCiZ1z57TB2lrEnatHTOjcsGido",
    authDomain: "shapss-ff394.firebaseapp.com",
    projectId: "shapss-ff394",
    storageBucket: "shapss-ff394.appspot.com",
    messagingSenderId: "321462011136",
    appId: "1:321462011136:web:9c50529e860122f061dfe5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();