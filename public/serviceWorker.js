/* eslint-disable no-undef */
// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
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

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
