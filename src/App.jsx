import { useState } from "react";
import { Notifications } from "react-push-notification";
import addNotification from "react-push-notification";

function App() {
  const [name, setName] = useState("");

  function warningNotification() {
    addNotification({
      title: "Warning",
      subtitle: "Please fill it",
      message: "You have to enter name",
      theme: "red",
      native: true,
      vibrate: 10,
      position: "top-right",
      closeButton: "X"
    });
  }

  function successNotification() {
    addNotification({
      title: "Success",
      position: "top-right",
      subtitle: "You have successfully submitted",
      message: "Welcome to GeeksforGeeks",
      theme: "light",
      closeButton: "X",
      native: true,
      vibrate: 10,
      backgroundTop: "green",
      backgroundBottom: "yellowgreen"
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "") warningNotification();
    else successNotification();
  }

  return (
    <div className="App">
      <Notifications />
      <h1>Hey Geek!</h1>
      <form>
        <label>Name:</label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
