importScripts('https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.8.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "BFbvEZkAn2O924wXqK9VYU55yiDEcN07jzuZUHQOYwv3RDosVObN8KFxse7jn3L1QiCqQ0FtOUp8ExW0Vj9HWZ8",
  authDomain: "opticach-invest.firebaseapp.com",
  projectId: "opticach-invest",
  storageBucket: "opticach-invest.firebasestorage.app",
  messagingSenderId: "378672521992",
  appId: "1:378672521992:web:3d04c33bbc92e3ad2d42bd"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Message reçu en arrière-plan ', payload);
  const notificationTitle = payload.notification.title || 'Notification OptiCach Invest';
  const notificationOptions = {
    body: payload.notification.body || 'Tu as une nouvelle notification.',
    icon: '/icon.png' // Remplace par le chemin vers une icône si tu en as une
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
