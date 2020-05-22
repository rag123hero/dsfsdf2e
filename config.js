import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyD6ozCcQdRG3F8BtkPtHz1CwScohXm8pjA",
  authDomain: "bed-time-story-54492.firebaseapp.com",
  databaseURL: "https://bed-time-story-54492.firebaseio.com",
  projectId: "bed-time-story-54492",
  storageBucket: "bed-time-story-54492.appspot.com",
  messagingSenderId: "13641408890",
  appId: "1:13641408890:web:64a85fe197fd20a38936c3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   