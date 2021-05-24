import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBCjpozXBVbfV_c1Bcx30ySdR-nXRmnaQ0",
    authDomain: "clone-888bb.firebaseapp.com",
    projectId: "clone-888bb",
    storageBucket: "clone-888bb.appspot.com",
    messagingSenderId: "689801603915",
    appId: "1:689801603915:web:21c3b3575d9d515614d6ce"
  };

const app = firebase.initializeApp();

export {app}