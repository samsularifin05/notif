import { useEffect } from "react";
import { messaging } from "./FirebaseConfig";

function App() {
  useEffect(() => {
    const requestPermission = async () => {
      try {
        await Notification.requestPermission();
        const token = await messaging.getToken();
        console.log("FCM Token:", token);
      } catch (error) {
        console.error("Error requesting notification permission:", error);
      }
    };

    requestPermission();
  }, []);

  return (
    <div className="App">
      <h1>Push Notification Demo</h1>
    </div>
  );
}

export default App;
