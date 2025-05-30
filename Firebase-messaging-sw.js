```js
// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/11.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.8.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "BFbvEZkAn2O924wXqK9VYU55yiDEcN07jzuZUHQOYwv3RDosVObN8KFxse7jn3L1QiCqQ0FtOUp8ExW0Vj9HWZ8",
  authDomain: "opticach-invest.firebaseapp.com",
  projectId: "opticach-invest",
  storageBucket: "opticach-invest.firebasestorage.app",
  messagingSenderId: "378672521992",
  appId: "1:378672521992:web:3d04c33bbc92e3ad2d42bd"
});

const messaging = firebase.messaging();
