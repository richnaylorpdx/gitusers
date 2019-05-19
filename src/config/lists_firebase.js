
import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCM8qWDjO2BgBSjvkwYOBb6Ka3NleD_lOI",
  authDomain: "listitems-7309b.firebaseapp.com",
  databaseURL: "https://listitems-7309b.firebaseio.com",
  projectId: "listitems-7309b",
  storageBucket: "listitems-7309b.appspot.com",
  messagingSenderId: "70056216938"
}
firebase.initializeApp(config)

export const databaseRef = firebase.database().ref()
export const gitlistsRef = databaseRef.child('lists')
