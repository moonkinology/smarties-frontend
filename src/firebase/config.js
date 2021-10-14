// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB968LZU-jwGThoeKhvDKYGjaA5qW9scBg",
  authDomain: "smarties-3dde8.firebaseapp.com",
  projectId: "smarties-3dde8",
  storageBucket: "smarties-3dde8.appspot.com",
  messagingSenderId: "34152716835",
  appId: "1:34152716835:web:c48d401baa26ae5d99ef96",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const firestore = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { storage, firestore, auth, timestamp };
