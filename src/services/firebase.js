import firebase from 'firebase/app';
import 'firebase/auth';




const config = {
    //TODO: add project details here from firebase app
    apiKey: "AIzaSyCmfAapIWwcxM-0OZLjR7uuRVtxk1i-0LU",
    authDomain: "project3-beach.firebaseapp.com",
    projectId: "project3-beach",
    storageBucket: "project3-beach.appspot.com",
    messagingSenderId: "451738069908",
    appId: "1:451738069908:web:d912bcf2899919ea8ebd81",
   
};

firebase.initializeApp(config);

//TODO: set up a provider...Google, Facebook, Github
const googleProvider = new firebase.auth.GoogleAuthProvider();

// set up auth functions
const auth = firebase.auth();

// TODO: Set up auth functions
function login() {
  auth.signInWithPopup(googleProvider);
}

function logout() {
  auth.signOut();
}

// TODO: Export auth functions
export {
  login,
  logout,
  auth,
}