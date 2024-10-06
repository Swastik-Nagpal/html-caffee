var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyA9YU0e5-LHTT-Y-fhU1nqqD8a226o8274",
  authDomain: "aipes-415b5.firebaseapp.com",
  projectId: "aipes-415b5",
  storageBucket: "aipes-415b5.appspot.com",
  messagingSenderId: "378096285496",
  appId: "1:378096285496:web:1484dfeb53fedd067e73cd",
  measurementId: "G-JHLM2DGGK0"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


