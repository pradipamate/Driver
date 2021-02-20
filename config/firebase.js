import * as firebase from 'firebase';
// import 'firebase/firestore';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/firestore';

const settings = { timestampsInSnapshots: true };

//for testing
const config = {
  apiKey: "AIzaSyCMyx7jSWmKHPQDNMl2wdQN0gy1Csv39NI",
  authDomain: "new-bus-track.firebaseapp.com",
  databaseURL: "https://new-bus-track.firebaseio.com",
  projectId: "new-bus-track",
  storageBucket: "new-bus-track.appspot.com",
  messagingSenderId: "27371399853",
  appId: "1:27371399853:android:465b94abbfacfe68e37424",

  measurementId: "UA-175019141-1"

  //  measurementId: "G-06THMKGB6N"
};


// firebase.initializeApp(config);
const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }
// export default firebase;