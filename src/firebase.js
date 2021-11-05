// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCyQVcdW6urhXru4qanLgUr77pKQk1eb5c",
    authDomain: "slackbuild-57a8c.firebaseapp.com",
    projectId: "slackbuild-57a8c",
    storageBucket: "slackbuild-57a8c.appspot.com",
    messagingSenderId: "839484998012",
    appId: "1:839484998012:web:079222bf291d845234e4f9",
    measurementId: "G-4BEBXJEW3Z"
  }; 

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth;
  const provider=new firebase.auth.GoogleAuthProvider();
  export {db,auth,provider};