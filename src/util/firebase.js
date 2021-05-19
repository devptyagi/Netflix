import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCSqbC9I1yHPU7uIOscHzqTfSvagQ_BmDQ",
    authDomain: "netflix-clone-devtyagi.firebaseapp.com",
    projectId: "netflix-clone-devtyagi",
    storageBucket: "netflix-clone-devtyagi.appspot.com",
    messagingSenderId: "475250382072",
    appId: "1:475250382072:web:0591a78f0294b927b5170d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;