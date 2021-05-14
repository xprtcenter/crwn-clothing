import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyCCLLEUyHEZZUThEJqwPTY4pI6D1x70J6o",
	authDomain: "crwn-db-fbee8.firebaseapp.com",
	projectId: "crwn-db-fbee8",
	storageBucket: "crwn-db-fbee8.appspot.com",
	messagingSenderId: "1010796874722",
	appId: "1:1010796874722:web:981ab45d4413393273c7bb",
	measurementId: "G-R76F0D4ST5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
