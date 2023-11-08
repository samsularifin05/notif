import firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyC7zs88hUVN6lej2m2iwWHg0rlzIMuGGoI",
  authDomain: "sagayaku-cfb0c.firebaseapp.com",
  databaseURL: "https://sagayaku-cfb0c-default-rtdb.firebaseio.com",
  projectId: "sagayaku-cfb0c",
  storageBucket: "sagayaku-cfb0c.appspot.com",
  messagingSenderId: "446790869852",
  appId: "1:446790869852:web:fee7e7b4ea13f96aaa9799",
  measurementId: "G-NH13DE5WMB"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

export { messaging };
