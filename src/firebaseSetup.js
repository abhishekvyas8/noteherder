import Rebase from 're-base';
import firebase from 'firebase/app';
import database from 'firebase/database';
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCCs7Lg6q76LoqrbX9CjspijFzM046GDM8",
    authDomain: "noteherder-c69f9.firebaseapp.com",
    databaseURL: "https://noteherder-c69f9.firebaseio.com",
    projectId: "noteherder-c69f9",
    storageBucket: "noteherder-c69f9.appspot.com",
    messagingSenderId: "523600578127"
});

const db = firebase.database(app);

export const gitHubProvider = new firebase.auth.GithubAuthProvider();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();

export default Rebase.createClass(db);