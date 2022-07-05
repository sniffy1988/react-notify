/* eslint-disable no-undef */
console.log("heyyy");
if (!Notification) {
  console.log("Desktop notifications are not available in your browser.");
}

if (Notification.permission !== "granted") {
  Notification.requestPermission();
}

function showNotification(text) {
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  } else {
    const options = {
      body: text,
      dir: "ltr",
      image: "image.jpg",
    };
    const notification = new Notification("Notification", options);

    notification.onclick = function () {
      window.open("https://www.google.com");
    };
  }
}

// Create notifications service

export default showNotification;
