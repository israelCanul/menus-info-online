import { getCurrentUrl } from "../helpers";

const configObjects = {
  servicesWP: {
    apiKey: "AIzaSyC3Md32qw_HwhaMVe9ZpV8oZXSnlhIa3Tc",
    authDomain: "pruebasar-ef08e.firebaseapp.com",
    databaseURL: "https://pruebasar-ef08e.firebaseio.com",
    projectId: "pruebasar-ef08e",
    storageBucket: "pruebasar-ef08e.appspot.com",
    messagingSenderId: "390609807622",
    appId: "1:390609807622:web:73302707a3f8f183581687",
  },
  services: {
    apiKey: "AIzaSyAy8lOT46fA5KdOQkuLySRIZKA52_dN48k",
    authDomain: "royalservices-9af31.firebaseapp.com",
    databaseURL: "https://royalservices-9af31.firebaseio.com",
    projectId: "royalservices-9af31",
    storageBucket: "royalservices-9af31.appspot.com",
    messagingSenderId: "506015413993",
    appId: "1:506015413993:web:08d150da75be2674e7e278",
    measurementId: "G-RZ9QY078PX",
  },
  dining: {
    apiKey: "AIzaSyAprgYalMAoEGkZQ05AGZPcrbswLKsbhd4",
    authDomain: "royaluno-roomservice.firebaseapp.com",
    projectId: "royaluno-roomservice",
    storageBucket: "royaluno-roomservice.appspot.com",
    messagingSenderId: "455773036240",
    appId: "1:455773036240:web:01c9783ad72e77b91dc8d5",
  },
  dev: {
    apiKey: "AIzaSyBHn16FReVu3oL0troK_9f4zbBMMvWdFKw",
    authDomain: "dev-services-34444.firebaseapp.com",
    databaseURL: "https://dev-services-34444-default-rtdb.firebaseio.com",
    projectId: "dev-services-34444",
    storageBucket: "dev-services-34444.appspot.com",
    messagingSenderId: "947557586303",
    appId: "1:947557586303:web:f7795a06108f17dd0d364a",
  },
};

const getConfig = () => {
  // let configObject = configObjects[getCurrentUrl()] || configObjects.services;
  let configObject = configObjects.dev;
  return configObject;
};
export { getConfig };
