import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDKjYpjk8u1IgyoD81kPxzox0V520Mjn4A",
  authDomain: "myapp-46e48.firebaseapp.com",
  databaseURL: "https://myapp-46e48-default-rtdb.firebaseio.com",
  projectId: "myapp-46e48",
  storageBucket: "myapp-46e48.appspot.com",
  messagingSenderId: "282272158126",
  appId: "1:282272158126:web:b164de337dd8e5c9b5783f",
  measurementId: "G-XDEVMRF7HB"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase;