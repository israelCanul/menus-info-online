import { initializeApp } from "firebase/app";
import { getCurrentUrl } from "../helpers";
import { getConfig } from "./conf";
// Add the Firebase services that you want to use
import {
  getDatabase,
  get,
  set,
  orderByChild,
  orderByValue,
  ref,
  query,
  equalTo,
} from "firebase/database";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

let firebaseConfig = getConfig();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function getResortsInfo(callback = () => {}) {
  get(query(ref(db, `Instances/${getCurrentUrl()}`)))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // makeObjectValuesWithRefs(snapshot)
        //aqui antes hiba como parametro del callback un snapshot.val()
        callback(makeObjectValuesWithRefs(snapshot), null);
      } else {
        callback(null, "No data available on firebase");
      }
    })
    .catch((error) => {
      callback(null, error.message || error);
    });
}

function makeObjectValuesWithRefs(snapshot){
 
  function recursiveMaker(snapshotR, rootKey = ""){
    let objectNodo = {};
    if(snapshotR.hasChildren()){
      objectNodo = {...snapshotR.val()};
      objectNodo["Options"] = [];
      objectNodo["Config"] = {};
      if(snapshotR.hasChild("Options")){
        snapshotR.child("Options").forEach((childSnapshot) => {
          objectNodo["Options"].push(recursiveMaker(childSnapshot,`${rootKey}/${snapshotR.key}/Options`));           
        });
      }
      if(snapshotR.hasChild("Config")){
        let config = snapshotR.child("Config").val();
        config["ref"] = rootKey+"/"+ snapshotR.key;
        objectNodo["Config"] = config;        
      }          
    }else{
      return
    }
    return objectNodo; 
  }
  let dataResult = recursiveMaker(snapshot, "/Instances");
  return dataResult;
}


export function logginWithCredentials(email, pass, callback = () => {}) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      callback(user, null, null)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      callback(null, errorCode, errorMessage);
    });
}
export function logginOutFromAuth(callback = () => {}) {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      callback('Sesión cerrada exitosamente', null, null);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      callback(null, errorCode, errorMessage);
    });
}

export function checkForUser(callback = () => {}) {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => callback(user));
}

export function getRef(referencia = '') {
  const database = getDatabase(app);
  return get(query(ref(database, referencia)));
}
export function updateRef(referencia = '', object, callback = () => {}) {
  const database = getDatabase(app);  
  if(referencia != null && referencia != ''){
    console.log("guardado",referencia, object);
    set(ref(database, referencia), object)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.log('There was an error', error);
    });
  }
}