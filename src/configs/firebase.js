import firebase from 'firebase';
import { FIREBASE_API_KEY } from './secrets';

const config = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "bookmark-manager-b059e.firebaseapp.com",
    databaseURL: "https://bookmark-manager-b059e.firebaseio.com",
    projectId: "bookmark-manager-b059e",
    storageBucket: "bookmark-manager-b059e.appspot.com",
    messagingSenderId: "827874929710"
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const storageRef = firebase.storage().ref();
export const db = firebase.firestore();
export default firebase;