import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyB1qw6daiLqA_y41-DykC2p4iN45rug-CI",
  authDomain: "instagram-rn-8f81f.firebaseapp.com",
  projectId: "instagram-rn-8f81f",
  storageBucket: "instagram-rn-8f81f.appspot.com",
  messagingSenderId: "107357006500",
  appId: "1:107357006500:web:765c2c1a75eebfd0801431"
};

// Initialize Firebase
!firebase.apps.length?firebase.initializeApp(firebaseConfig) : firebase.app()

const db =firebase.firestore()


export  {firebase,db}