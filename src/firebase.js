import  firebase from "firebase";
import "firebase/auth"
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBl5ybh1H4cD3NkdYCNbk-gb_ESOwLRFC8",
  authDomain: "whatsapp-clone-361c8.firebaseapp.com",
  projectId: "whatsapp-clone-361c8",
  storageBucket: "whatsapp-clone-361c8.appspot.com",
  messagingSenderId: "319841146536",
  appId: "1:319841146536:web:76dd9b147a2ac637c6d49d",
  measurementId: "G-KHHSK139WT"
});
// passing the config object storing in firebaseApp object 
const db = firebaseApp.firestore();
// which is gonna access firestore instance of our app
const auth = firebase.auth();
// responsible for authentication part 
const provider = new firebase.auth.GoogleAuthProvider();
// for google authentication 
export { auth, provider }
export default db;


// import firebase from "firebase";
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// //GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
// const firebaseConfig = {
//   apiKey: "AIzaSyC21qTaQneaMAl_6R1GVGbZQQDUR-QPbWs",
//     authDomain: "whatsapp-clone-8a13b.firebaseapp.com",
//     projectId: "whatsapp-clone-8a13b",
//     storageBucket: "whatsapp-clone-8a13b.appspot.com",
//     messagingSenderId: "227944634666",
//     appId: "1:227944634666:web:2c701805feef1599bd6653"
//   };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore(); 
//   const auth = firebaseApp.auth();
//   const provider = new firebase.auth.GoogleAuthProvider();

//   export {auth,provider};
//   export default db;