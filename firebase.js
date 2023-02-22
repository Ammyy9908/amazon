// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnTnBRp5VrOl1xPERoCiFdh8mvSFBmR-g",
  authDomain: "fir-5705d.firebaseapp.com",
  projectId: "fir-5705d",
  storageBucket: "fir-5705d.appspot.com",
  messagingSenderId: "364719350102",
  appId: "1:364719350102:web:b9900bef0c5f6ba36876f7",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}
export default firebase;
