self.addEventListener("push", function (e) {
  const options = {
    body: e.data.text()
  };
  console.log(e.data.text(), "MASUK");
  e.waitUntil(self.registration.showNotification("Push Notification", options));
});
