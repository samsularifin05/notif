self.addEventListener("push", function (e) {
  const options = {
    body: e.data.text()
  };
  e.waitUntil(self.registration.showNotification("Push Notification", options));
});
