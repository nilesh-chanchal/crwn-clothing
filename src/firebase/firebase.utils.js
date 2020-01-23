
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDVrpZF4nd46Ll-e8EXQX4C5Eh-0B0pKWc",
  authDomain: "crwn-db-1004.firebaseapp.com",
  databaseURL: "https://crwn-db-1004.firebaseio.com",
  projectId: "crwn-db-1004",
  storageBucket: "crwn-db-1004.appspot.com",
  messagingSenderId: "182395045980",
  appId: "1:182395045980:web:b1993dcca5474af622be99",
  measurementId: "G-S8XP47PSHV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;