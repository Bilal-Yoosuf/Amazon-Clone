import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZoM_J3YmGO-TXtaYfCr5rQtdNFLPm1uM",
    authDomain: "clone-54ca6.firebaseapp.com",
    databaseURL: "https://clone-54ca6.firebaseio.com",
    projectId: "clone-54ca6",
    storageBucket: "clone-54ca6.appspot.com",
    messagingSenderId: "103402735686",
    appId: "1:103402735686:web:b04e8eaa9ef96a13576247",
    measurementId: "G-SN3P0NVKVR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db,auth};
  