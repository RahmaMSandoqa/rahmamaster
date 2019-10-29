import firebase from "../../node_modules/@firebase/app";
import "../../node_modules/@firebase/storage";

// // Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCMQYuc5lFjgC7wc9HPDesaixkGWWXHVlQ",
  authDomain: "newt-79384.firebaseapp.com",
  databaseURL: "https://newt-79384.firebaseio.com",
  projectId: "newt-79384",
  storageBucket: "newt-79384.appspot.com",
  messagingSenderId: "713247973078",
  appId: "1:713247973078:web:e06c259a162fa6f0fef377",
  measurementId: "G-4SC7S9GE93"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };

// var Config = {
//  apiKey: "AIzaSyDNWlNBaV4UpmXISICGr63wif-0I5UKbt0",
//  authDomain: "testing-d88c3.firebaseapp.com",
//  databaseURL: "https://testing-d88c3.firebaseio.com",
//  projectId: "testing-d88c3",
//  storageBucket: "testing-d88c3.appspot.com",
//  messagingSenderId: "887026610125",
//  appId: "1:887026610125:web:e682cf9428fd9da4b45e84",
//  measurementId: "G-BWJHCRLFKT"
// };

// firebase.initializeApp(Config);

// const storage = firebase.storage();
// export { storage, firebase as default };
