import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBYAsWpKPhoVgX_7aKmNR2UsTKqUE3FgDo",
    authDomain: "tpreact-dabe6.firebaseapp.com",
    projectId: "tpreact-dabe6",
    storageBucket: "tpreact-dabe6.appspot.com",
    messagingSenderId: "18449897830",
    appId: "1:18449897830:web:b5035ba4c0d844d74090a7",
    measurementId: "G-72SR5HFNEF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.auth = firebase.auth();
  firebase.db=firebase.firestore();
  export default firebase;
