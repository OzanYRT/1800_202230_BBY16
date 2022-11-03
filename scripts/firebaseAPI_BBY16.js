//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDodjNoaXwUwEUq2H_CkBUCMNdpNZRnyU8",
  authDomain: "bby16-1099b.firebaseapp.com",
  projectId: "bby16-1099b",
  storageBucket: "bby16-1099b.appspot.com",
  messagingSenderId: "748013070235",
  appId: "1:748013070235:web:633c6190070f86cd1e233e"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();