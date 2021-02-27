import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"


let fire = (() => {
    var firebaseConfig = {
        apiKey: "AIzaSyB_VjIGspuBhLV8wIIbwPkXnTcHIWjtA3w",
        authDomain: "projectlibrary-a2643.firebaseapp.com",
        projectId: "projectlibrary-a2643",
        storageBucket: "projectlibrary-a2643.appspot.com",
        messagingSenderId: "21641913206",
        appId: "1:21641913206:web:499f045bfecc5b494ed057"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    let init = () => {
        const auth = firebase.auth();
        const db = firebase.firestore();
        console.log(auth, db);
    }

    return { init };
})();

export default fire;