import  firebase from "firebase";
import "firebase/auth"
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBic6pU3lzwYSgFz0Xrf-KDRgihILYUlKc",
  authDomain: "whatsappclonesr.firebaseapp.com",
  projectId: "whatsappclonesr",
  storageBucket: "whatsappclonesr.appspot.com",
  messagingSenderId: "116734486569",
  appId: "1:116734486569:web:05224dfa31378785189438"
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