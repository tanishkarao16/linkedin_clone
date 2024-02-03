import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBiczkH_aUAsCac-zvo_t2MGZ7tIZMV35U",
    authDomain: "linkedin-clone-2ac86.firebaseapp.com",
    projectId: "linkedin-clone-2ac86",
    storageBucket: "linkedin-clone-2ac86.appspot.com",
    messagingSenderId: "913147951413",
    appId: "1:913147951413:web:c4bd3cbdc8252318f4347c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};