
import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBcSos02OD2sxRkQc0g5sgtOL8UwRc4To4",
    authDomain: "githubusersaver.firebaseapp.com",
    databaseURL: "https://githubusersaver.firebaseio.com",
    projectId: "githubusersaver",
    storageBucket: "githubusersaver.appspot.com",
    messagingSenderId: "550975255371"
  };
  
firebase.initializeApp(config);

const databaseRef = firebase.database().ref()
export const gitusersRef = databaseRef.child('users')