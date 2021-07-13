// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDBx0eEFBUG7rkbYN97biNwpzMtEUNX_0w",
    authDomain: "clone-180c1.firebaseapp.com",
    projectId: "clone-180c1",
    storageBucket: "clone-180c1.appspot.com",
    messagingSenderId: "1060226420224",
    appId: "1:1060226420224:web:ae8337e584ebec30d692e5",
    measurementId: "G-6MFC9JZHGH"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
