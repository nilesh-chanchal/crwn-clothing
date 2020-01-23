
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const  { displayName, email} = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData

        })

      } catch (error){
        console.log('error creating user', error.message)

      }
    }
    console.log(snapShot);
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;