import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute, cleanupOutdatedCaches } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { CacheFirst } from "workbox-strategies";
import { CacheableResponsePlugin } from "workbox-cacheable-response/CacheableResponsePlugin";

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

messaging.onMessage((payload) => {
  console.log("TESTSTSTST ", payload.notification.body);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Register precache routes (static cache)
precacheAndRoute(self.__WB_MANIFEST || []);

// Clean up old cache
cleanupOutdatedCaches();

// Google fonts dynamic cache
registerRoute(
  /^https:\/\/fonts\.googleapis\.com\/.*/i,
  new CacheFirst({
    cacheName: "google-fonts-cache",
    plugins: [
      new ExpirationPlugin({ maxEntries: 500, maxAgeSeconds: 5184e3 }),
      new CacheableResponsePlugin({ statuses: [0, 200] })
    ]
  }),
  "GET"
);

// Google fonts dynamic cache
registerRoute(
  /^https:\/\/fonts\.gstatic\.com\/.*/i,
  new CacheFirst({
    cacheName: "gstatic-fonts-cache",
    plugins: [
      new ExpirationPlugin({ maxEntries: 500, maxAgeSeconds: 5184e3 }),
      new CacheableResponsePlugin({ statuses: [0, 200] })
    ]
  }),
  "GET"
);

// Dynamic cache for images from `/storage/`
registerRoute(
  /.*storage.*/,
  new CacheFirst({
    cacheName: "dynamic-images-cache",
    plugins: [
      new ExpirationPlugin({ maxEntries: 500, maxAgeSeconds: 5184e3 }),
      new CacheableResponsePlugin({ statuses: [0, 200] })
    ]
  }),
  "GET"
);

// Install and activate service worker
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());

// Receive push notifications
self.addEventListener("push", function (e) {
  if (!(self.Notification && self.Notification.permission === "granted")) {
    //notifications aren't supported or permission not granted!
    console.log("nononono");
    return;
  }

  if (e.data) {
    let message = e.data.json();
    e.waitUntil(
      self.registration.showNotification(message.title, {
        body: message.body,
        icon: message.icon,
        actions: message.actions
      })
    );
  }
});

// Click and open notification
self.addEventListener(
  "notificationclick",
  function (event) {
    event.notification.close();
    if (event.action === "farm") clients.openWindow("/farm");
    else if (event.action === "home") clients.openWindow("/");
    else if (event.action === "training")
      clients.openWindow("/mining-training");
    else if (event.action === "dns") clients.openWindow("/shops/dns");
    else if (event.action === "ali") clients.openWindow("/shops/aliexpress");
    else if (event.action === "avito") clients.openWindow("/avito");
    else if (event.action === "friends") clients.openWindow("/friends");
    else if (event.action === "locations") clients.openWindow("/locations");
    else if (event.action === "vk-chat")
      clients.openWindow(
        "https://vk.me/join/au1/k0nOTjLasxMO6wX50QuyPfYosyWdPEI="
      );
    else clients.openWindow(event.action); // Open link from action
  },
  false
);
