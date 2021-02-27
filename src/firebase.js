// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB3iCRwvfXt48jEOGRN1ttN6D6W6Yc6-IE",
  authDomain: "yamini-snapchat-clone.firebaseapp.com",
  projectId: "yamini-snapchat-clone",
  storageBucket: "yamini-snapchat-clone.appspot.com",
  messagingSenderId: "635023202120",
  appId: "1:635023202120:web:8d3c2d55b773df08acc57d",
  measurementId: "G-LS3L4SV57L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,storage,provider};