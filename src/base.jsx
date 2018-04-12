import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDSknICKmykO-LKN047da39l58MmSTp6Bs",
    authDomain: "estudo-react-bora-ajudar.firebaseapp.com",
    databaseURL: "https://estudo-react-bora-ajudar.firebaseio.com",
    projectId: "estudo-react-bora-ajudar",
    storageBucket: "estudo-react-bora-ajudar.appspot.com",
    messagingSenderId: "252394730774"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());
export const auth = firebase.auth();

export default base;