import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyARUoDLXJO8bfOSKQwljgOoyc843N7HQv0",
    authDomain: "test-5288d.firebaseapp.com",
    databaseURL: "https://test-5288d.firebaseio.com",
    projectId: "test-5288d",
    storageBucket: "test-5288d.appspot.com",
    messagingSenderId: "598661708312"
};
export const fb = firebase.initializeApp(config);