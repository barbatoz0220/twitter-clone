import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDS8dfCT1biOa9VPIvAppp_M4F_cc7E5-c",
    authDomain: "twitter-clone-0220.firebaseapp.com",
    databaseURL: "https://twitter-clone-0220.firebaseio.com",
    projectId: "twitter-clone-0220",
    storageBucket: "twitter-clone-0220.appspot.com",
    messagingSenderId: "238386156726",
    appId: "1:238386156726:web:a4edbf9b8fd88e52f44217",
    measurementId: "G-MQD4ZK6HK5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;