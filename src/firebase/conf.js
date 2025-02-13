import { getCurrentUrl } from "../helpers";

const configObjects = {
  menus: {
    apiKey: "AIzaSyAKH9xegl9e3GW0ks0w1ElP4opzOXTl1Ew",
    authDomain: "menus-info-online.firebaseapp.com",
    databaseURL: "https://menus-info-online-default-rtdb.firebaseio.com",
    projectId: "menus-info-online",
    storageBucket: "menus-info-online.firebasestorage.app",
    messagingSenderId: "268704344658",
    appId: "1:268704344658:web:2fa45b217e8e0e48b18d8b"
  },
};

const getConfig = () => {
  // let configObject = configObjects[getCurrentUrl()] || configObjects.services;
  let configObject = configObjects.menus;
  return configObject;
};
export { getConfig };
