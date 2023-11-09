// import { useEffect, useState } from "react";
// import firebase from "firebase/app";
// import "firebase/messaging";

// const firebaseConfig = {
//   apiKey: "AIzaSyC7zs88hUVN6lej2m2iwWHg0rlzIMuGGoI",
//   authDomain: "sagayaku-cfb0c.firebaseapp.com",
//   databaseURL: "https://sagayaku-cfb0c-default-rtdb.firebaseio.com",
//   projectId: "sagayaku-cfb0c",
//   storageBucket: "sagayaku-cfb0c.appspot.com",
//   messagingSenderId: "446790869852",
//   appId: "1:446790869852:web:fee7e7b4ea13f96aaa9799",
//   measurementId: "G-NH13DE5WMB"
// };

// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

function App() {
  // const [notification, setNotification] = useState(null);

  // useEffect(() => {
  //   // Request notification permission
  //   messaging.requestPermission().then(() => {
  //     // Get the registration token
  //     messaging.getToken().then((token) => {
  //       console.log("FCM token:", token);
  //       // Send the token to your server to store it for later use
  //     });
  //   });

  //   // // Subscribe to a topic
  //   // messaging.subscribe("general").then(() => {
  //   //   console.log("Subscribed to topic: general");
  //   // });

  //   // Handle incoming messages
  //   messaging.onMessage((payload) => {
  //     console.log("Received message:", payload);
  //     setNotification(payload.data.notification);
  //   });
  // }, []);

  return (
    <div>
      asdas
      {/* {notification && (
        <div>
          <p>Title: {notification.title}</p>
          <p>Message: {notification.body}</p>
        </div>
      )} */}
    </div>
  );
}

export default App;
