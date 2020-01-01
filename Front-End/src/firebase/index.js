import firebase from "../../node_modules/@firebase/app";
import "../../node_modules/@firebase/storage";

  const firebaseConfig = {
    apiKey: "AIzaSyAlWtK5phxoEpPOqqglLBbcWq06ZoAQXkE",
    authDomain: "test-90911.firebaseapp.com",
    databaseURL: "https://test-90911.firebaseio.com",
    projectId: "test-90911",
    storageBucket: "test-90911.appspot.com",
    messagingSenderId: "666820050462",
    appId: "1:666820050462:web:c51fb65721c7cd5fa4380f",
    measurementId: "G-4ZL7D4H8W5"
  };
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };
